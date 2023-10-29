package com.example.backend.repository;

import com.example.backend.model.Patient;
import com.example.backend.model.Doctor;
import com.example.backend.model.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {
    List<Prescription> findAllByPatient(Patient patient);
    List<Prescription> findAllByDoctor(Doctor doctor);
    List<Prescription> findAllByOngoing(boolean ongoing);
}
