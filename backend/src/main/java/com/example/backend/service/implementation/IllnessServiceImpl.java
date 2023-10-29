package com.example.backend.service.implementation;

import com.example.backend.model.Illness;
import com.example.backend.model.Symptom;
import com.example.backend.repository.IllnessRepository;
import com.example.backend.service.IllnessService;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class IllnessServiceImpl implements IllnessService {

    private final IllnessRepository illnessRepository;

    public IllnessServiceImpl(IllnessRepository illnessRepository) {
        this.illnessRepository = illnessRepository;
    }

    @Override
    public List<Illness> getAll() {
        return illnessRepository.findAll();
    }

    @Override
    public Illness getByName(String name) {
        return illnessRepository.findByName(name);
    }

    @Override
    public List<Illness> findIllnessesBySymptom(Set<Symptom> symptoms) {
        List<Illness> result = new ArrayList<>();

        for (Symptom symptom : symptoms) {
            result.addAll(illnessRepository.findAllBySymptomsIn(Collections.singleton(symptom)));
        }

        return result;
    }

    @Override
    public Illness createIllness(Illness illness) {
        return illnessRepository.save(illness);
    }

    @Override
    public Illness updateIllness(Long id, Illness illness) {
        if (illnessRepository.existsById(id)) {
            return illnessRepository.save(illness);
        }
        return null;
    }

    @Override
    public boolean deleteIllness(Long id) {
        if (illnessRepository.existsById(id)) {
            illnessRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public void addSymptomToIllness(Long illnessId, Symptom symptom) {
        Optional<Illness> optionalIllness = illnessRepository.findById(illnessId);
        optionalIllness.ifPresent(illness -> {
            illness.addSymptom(symptom);
            illnessRepository.save(illness);
        });
    }
}
