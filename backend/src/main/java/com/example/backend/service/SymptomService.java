package com.example.backend.service;

import com.example.backend.model.Illness;
import com.example.backend.model.Symptom;

import java.util.List;
import java.util.Set;

public interface SymptomService {
    Symptom getByName(String name);
    Symptom createSymptom(Symptom symptom);
    Symptom updateSymptom(long id, Symptom symptom);
    boolean deleteSymptom(long id);
}
