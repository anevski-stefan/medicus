package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@Table(name = "appointments")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "patientID", referencedColumnName = "id")
    private Patient patient;
    @ManyToOne
    @JoinColumn(name = "doctorID", referencedColumnName = "id")
    private Doctor doctor;
    @Column(nullable = false)
    private LocalDate date;
    @Column(nullable = false)
    private LocalTime time;
    @Column(nullable = false)
    private String symptoms;
    @Column
    private String diagnosis;
    @Column
    private String treatment;
    @Column(nullable = false)
    private AppointmentStatus status;

    public Appointment(){
        this.status = AppointmentStatus.PENDING;
    }
}
