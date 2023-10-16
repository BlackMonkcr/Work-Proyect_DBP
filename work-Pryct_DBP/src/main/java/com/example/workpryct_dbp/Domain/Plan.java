package com.example.workpryct_dbp.Domain;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "plans")
@Getter
@Setter
@NoArgsConstructor
public class Plan {
    // ---------------------------------------------------------------------------------------------
    // Subscription_plan Attributes

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long plan_id;

    @Column(name = "name", nullable = false, unique = true, length = 50)
    private String name;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "description", nullable = false, length = 500)
    private String description;

    @JsonManagedReference
    @OneToMany(mappedBy = "plan")
    private Set<User> users;

    // ---------------------------------------------------------------------------------------------
    // Constructors (Constructor Default implemented with Lombok)

    public Plan(String name, Double price, String description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    // ---------------------------------------------------------------------------------------------
    // Getters and Setters (Implemented with Lombok)
    // ---------------------------------------------------------------------------------------------
}
