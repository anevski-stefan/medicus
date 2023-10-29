package com.example.backend.model;


import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Data
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "symptoms")
public class Symptom {
    private String name;
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToMany(mappedBy = "symptoms")
    private Set<Illness> illnesses;
}
