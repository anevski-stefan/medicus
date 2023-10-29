package com.example.backend.service;

import com.example.backend.model.Patient;
import com.example.backend.model.UserType;

import java.util.List;

public interface PatientService {
    Patient getByID(long id);
    Patient findPatientByEmailAndPassword(String email, String password);
    List<Patient> getAll();
    Patient createPatients(Patient patient);
    Patient updatePatient(long id, Patient patient);
    boolean deletePatient(long id);

}
