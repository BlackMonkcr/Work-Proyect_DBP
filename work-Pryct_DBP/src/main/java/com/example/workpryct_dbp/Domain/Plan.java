package com.example.workpryct_dbp.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "subscription_plans")
@Getter
@Setter
@NoArgsConstructor
public class Subscription_plan {
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

    @JsonIgnore
    @OneToMany(mappedBy = "plan")
    private Set<User> users;

    // ---------------------------------------------------------------------------------------------
    // Constructors (Constructor Default implemented with Lombok)

    public Subscription_plan(String name, Double price, String description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    // ---------------------------------------------------------------------------------------------
    // Getters and Setters (Implemented with Lombok)
    // ---------------------------------------------------------------------------------------------
}
