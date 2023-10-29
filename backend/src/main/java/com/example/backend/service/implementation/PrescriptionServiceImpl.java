package com.example.backend.service.implementation;

import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import com.example.backend.model.Prescription;
import com.example.backend.repository.PrescriptionRepository;
import com.example.backend.service.PrescriptionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrescriptionServiceImpl implements PrescriptionService {

    private final PrescriptionRepository prescriptionRepository;

    public PrescriptionServiceImpl(PrescriptionRepository prescriptionRepository) {
        this.prescriptionRepository = prescriptionRepository;
    }

    @Override
    public List<Prescription> getAll() {
        return prescriptionRepository.findAll();
    }

    @Override
    public List<Prescription> findAllByPatient(Patient patient) {
        return prescriptionRepository.findAllByPatient(patient);
    }

    @Override
    public List<Prescription> findAllByDoctor(Doctor doctor) {
        return prescriptionRepository.findAllByDoctor(doctor);
    }

    @Override
    public List<Prescription> findAllByOngoing(boolean ongoing) {
        return prescriptionRepository.findAllByOngoing(ongoing);
    }

    @Override
    public Prescription createPrescription(Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    @Override
    public Prescription updatePrescription(long id, Prescription prescription) {
        if(prescriptionRepository.existsById(id)){
            return prescriptionRepository.save(prescription);
        }
        return null;
    }

    @Override
    public boolean deletePrescription(long id) {
        if(prescriptionRepository.existsById(id)){
            prescriptionRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
