package com.example.backend.repository;

import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import com.example.backend.model.Specialization;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    Doctor findByEmailAndPassword(String email, String password);
    List<Doctor> findAllBySpecialization(Specialization specialization);
}
