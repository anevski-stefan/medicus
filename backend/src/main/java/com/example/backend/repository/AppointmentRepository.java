package com.example.backend.repository;

import com.example.backend.model.Appointment;
import com.example.backend.model.AppointmentStatus;
import java.time.LocalDate;
import java.util.List;
import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;



public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findAllByPatient(Patient patient);
    List<Appointment> findAllByDoctor(Doctor doctor);
    List<Appointment> findAllByDate(LocalDate date);
    List<Appointment> findAllByStatus (AppointmentStatus status);
}
