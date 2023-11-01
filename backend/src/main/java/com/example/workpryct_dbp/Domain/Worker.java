package com.example.workpryct_dbp.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "workers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Worker {
    // ---------------------------------------------------------------------------------------------
    // CLIENT ATTRIBUTES

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long worker_id;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "is_available", nullable = false)
    private boolean is_available;

    @Column(name = "is_premium", nullable = false)
    private boolean is_premium;

    @Column(name = "hour_price", nullable = false)
    private Double hour_price;

    @Column(name = "national_id", nullable = false)
    private Long national_id;

    private enum type_nacional_id {
        DNI,
        PASAPORTE
    }

    @Enumerated(EnumType.STRING)
    private type_nacional_id type_nacional_id;

    @Column(name = "occupation", nullable = false)
    private String Occupation;

    @OneToOne
    private User user;

    @ManyToOne
    @JoinColumn(name = "plan_id", referencedColumnName = "plan_id")
    private Plan plan;

    @OneToMany(mappedBy = "worker")
    private Set<Img> work_images;

    @JsonIgnore
    @ManyToMany(mappedBy = "favorite_workers")
    private Set<Client> favorite_clients = new HashSet<>();
}
