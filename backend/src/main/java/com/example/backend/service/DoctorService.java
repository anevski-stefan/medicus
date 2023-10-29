package com.example.backend.service;

import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import com.example.backend.model.Specialization;

import java.util.List;

public interface DoctorService {
    Doctor getByID(long id);
    Doctor findDoctorByEmailAndPassword(String email, String password);
    List<Doctor> getAll();
    List<Doctor> findAllBySpecialization(Specialization specialization);
    Doctor createDoctor(Doctor doctor);
    Doctor updateDoctor(long id, Doctor doctor);
    boolean deleteDoctor(long id);
}
