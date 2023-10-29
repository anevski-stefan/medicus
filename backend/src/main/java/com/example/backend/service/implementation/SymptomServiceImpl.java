package com.example.backend.service.implementation;

import com.example.backend.model.Illness;
import com.example.backend.model.Symptom;
import com.example.backend.repository.SymptomRepository;
import com.example.backend.service.SymptomService;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SymptomServiceImpl implements SymptomService {

    private final SymptomRepository symptomRepository;

    public SymptomServiceImpl(SymptomRepository symptomRepository) {
        this.symptomRepository = symptomRepository;
    }

    @Override
    public Symptom getByName(String name) {
        return symptomRepository.findByName(name);
    }

    @Override
    public Symptom createSymptom(Symptom symptom) {
        return symptomRepository.save(symptom);
    }

    @Override
    public Symptom updateSymptom(long id, Symptom symptom) {
        if(symptomRepository.existsById(id)){
            return symptomRepository.save(symptom);
        }
        return null;
    }

    @Override
    public boolean deleteSymptom(long id) {
        if(symptomRepository.existsById(id)){
            symptomRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
