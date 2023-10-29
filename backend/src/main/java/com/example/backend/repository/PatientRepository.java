package com.example.backend.repository;

import com.example.backend.model.Patient;
import com.example.backend.model.UserType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    Patient findByEmailAndPassword(String email, String password);
}
