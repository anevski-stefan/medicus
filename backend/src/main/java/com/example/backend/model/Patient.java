package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@AllArgsConstructor
@Getter
@Setter
@Data
@Table(name = "patients")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private Date birthDate;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;
    @Column
    private UserType userType;

    public Patient(){
        this.userType = UserType.PATIENT;
    }

}
