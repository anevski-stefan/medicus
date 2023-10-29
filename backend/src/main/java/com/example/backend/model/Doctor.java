package com.example.backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@AllArgsConstructor
@Getter
@Setter
@Data
@Table(name = "doctors")
public class Doctor{

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

    @Column
    @Enumerated(EnumType.STRING)
    private Specialization specialization;

    public Doctor(){
        this.setUserType(UserType.DOCTOR);
    }
}
