package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@Table(name = "prescriptions")
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "patientID", referencedColumnName = "id")
    private Patient patient; // Patient for whom the prescription is for

    @ManyToOne
    @JoinColumn(name = "doctorID", referencedColumnName = "id")
    private Doctor doctor; // Doctor who wrote the prescription

    @Column(nullable = false)
    private String instructions; // What medicine to take and dosage

    @Column(nullable = false)
    private LocalTime time; // When to take medicine

    @Column(nullable = false)
    private boolean ongoing; // True - patient still has to take medicine | False - patient no longer has to take meds

    public Prescription(){
        this.ongoing = true;
    }
}
