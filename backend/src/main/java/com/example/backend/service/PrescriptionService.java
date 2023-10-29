package com.example.backend.service;

import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import com.example.backend.model.Prescription;

import java.util.List;

public interface PrescriptionService {
    List<Prescription> getAll();
    List<Prescription> findAllByPatient(Patient patient);
    List<Prescription> findAllByDoctor(Doctor doctor);
    List<Prescription> findAllByOngoing(boolean ongoing);
    Prescription createPrescription(Prescription prescription);
    Prescription updatePrescription(long id, Prescription prescription);
    boolean deletePrescription(long id);
}
