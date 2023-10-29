package com.example.backend.service;

import com.example.backend.model.Appointment;
import com.example.backend.model.AppointmentStatus;
import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;

import java.time.LocalDate;
import java.util.List;

public interface AppointmentService {
    List<Appointment> findAllByPatient(Patient patient);
    List<Appointment> findAllByDoctor(Doctor doctor);
    List<Appointment> findAllByDate(LocalDate date);
    List<Appointment> findAllByStatus (AppointmentStatus status);
    List<Appointment> getAll();
    Appointment createAppointment(Appointment appointment);
    Appointment updateAppointment(long id, Appointment appointment);
    boolean deleteAppointment(long id);
}
