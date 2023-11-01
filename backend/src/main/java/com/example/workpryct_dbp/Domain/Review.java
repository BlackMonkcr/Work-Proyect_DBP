package com.example.workpryct_dbp.Domain;

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
@Table(name = "reviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review {
    // ---------------------------------------------------------------------------------------------
    // REVIEW ATTRIBUTES

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long review_id;

    @Column(name = "message", nullable = false)
    private String message;

    @Column(name = "rating", nullable = false)
    private Double rating;

    @Column(name = "date", nullable = false)
    private Date date;

    @ManyToOne
    private User sender;

    @ManyToOne
    private User recipient;

    // END REVIEW ATTRIBUTES

    // ---------------------------------------------------------------------------------------------
    // Constructors (Constructor Default & AllArgs implemented with Lombok)
    //
    // Getters and Setters (Implemented with Lombok)
    // ---------------------------------------------------------------------------------------------
}
