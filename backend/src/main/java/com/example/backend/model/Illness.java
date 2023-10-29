package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;
import java.util.Set;


@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "illnesses")
public class Illness {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String name;

    @ManyToMany
    @JoinTable(
            name = "illness_symptom",
            joinColumns = @JoinColumn(name = "illness_id"),
            inverseJoinColumns = @JoinColumn(name = "symptom_id")
    )
    private Set<Symptom> symptoms;

    public void addSymptom(Symptom symptom) {
        this.symptoms.add(symptom);
    }
}
