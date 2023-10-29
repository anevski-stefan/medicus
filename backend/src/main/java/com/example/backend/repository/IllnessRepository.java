package com.example.backend.repository;

import com.example.backend.model.Illness;
import com.example.backend.model.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface IllnessRepository extends JpaRepository<Illness, Long> {

    Illness findByName(String name);
    List<Illness> findAllBySymptomsIn(Set<Symptom> symptoms);

}
