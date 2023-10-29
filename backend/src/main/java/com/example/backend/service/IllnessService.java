package com.example.backend.service;

import com.example.backend.model.Illness;
import com.example.backend.model.Symptom;

import java.util.List;
import java.util.Set;

public interface IllnessService {
    List<Illness> getAll();
    Illness getByName(String name);
    List<Illness> findIllnessesBySymptom(Set<Symptom> symptoms);
    Illness createIllness(Illness illness);
    Illness updateIllness(Long id, Illness illness);
    boolean deleteIllness(Long id);
    void addSymptomToIllness(Long illnessId, Symptom symptom);
}
