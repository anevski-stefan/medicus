package com.example.backend.service.implementation;

import com.example.backend.model.Patient;
import com.example.backend.model.UserType;
import com.example.backend.repository.PatientRepository;
import com.example.backend.service.PatientService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    private final PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public Patient getByID(long id) {
        return patientRepository.getById(id);
    }


    @Override
    public Patient findPatientByEmailAndPassword(String email, String password) {
        return patientRepository.findByEmailAndPassword(email, password);
    }

    @Override
    public List<Patient> getAll() {
        return patientRepository.findAll();
    }

    @Override
    public Patient createPatients(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public Patient updatePatient(long id, Patient patient) {
        if(patientRepository.existsById(id)){
            return patientRepository.save(patient);
        }
        return null;
    }

    @Override
    public boolean deletePatient(long id) {
        if(patientRepository.existsById(id)){
            patientRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
