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
@Table(name = "clients")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Client {
    // ---------------------------------------------------------------------------------------------
    // CLIENT ATTRIBUTES

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long client_id;

    @JsonManagedReference
    @OneToOne
    private User user;
}
