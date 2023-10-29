package com.example.backend.controller;

import com.example.backend.model.Patient;
import com.example.backend.service.PatientService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class PatientRestController {
    private final PatientService patientService;

    public PatientRestController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping("/patients")
    public List<Patient> getAll(){
        return patientService.getAll();
    }

}
