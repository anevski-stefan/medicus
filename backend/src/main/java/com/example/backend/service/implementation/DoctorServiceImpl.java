package com.example.backend.service.implementation;

import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import com.example.backend.model.Specialization;
import com.example.backend.repository.DoctorRepository;
import com.example.backend.service.DoctorService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {

    private final DoctorRepository doctorRepository;

    public DoctorServiceImpl(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @Override
    public Doctor getByID(long id) {
        return doctorRepository.getById(id);
    }

    @Override
    public Doctor findDoctorByEmailAndPassword(String email, String password) {
        return doctorRepository.findByEmailAndPassword(email, password);
    }

    @Override
    public List<Doctor> getAll() {
        return doctorRepository.findAll();
    }

    @Override
    public List<Doctor> findAllBySpecialization(Specialization specialization) {
        return doctorRepository.findAllBySpecialization(specialization);
    }

    @Override
    public Doctor createDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public Doctor updateDoctor(long id, Doctor doctor) {
        if(doctorRepository.existsById(id)){
            return doctorRepository.save(doctor);
        }
        return null;
    }

    @Override
    public boolean deleteDoctor(long id) {
        if(doctorRepository.existsById(id)){
            doctorRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
