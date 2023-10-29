package com.example.backend.repository;

import com.example.backend.model.Illness;
import com.example.backend.model.Symptom;

import java.util.Collection;
import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SymptomRepository extends JpaRepository<Symptom, Long> {
    Symptom findByName(String name);
}
