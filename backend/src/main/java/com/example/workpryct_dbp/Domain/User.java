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
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    // ---------------------------------------------------------------------------------------------
    // BASE USER ATTRIBUTES

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "phone", nullable = false, unique = true)
    private Long phone;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "location", nullable = false)
    private String precise_location;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "is_verified", nullable = false)
    private Boolean is_verified;

    @Column(name = "registration_date", nullable = false)
    private Date registration_date;

    @Column(name = "number_reviews", nullable = false)
    private Integer number_reviews;

    @Column(name = "rating", nullable = false)
    private Double rating;

    @JsonManagedReference
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Img profile_picture;

    @JsonManagedReference
    @OneToMany(mappedBy = "recipient")
    private List<Review> receivedReviews;

    @JsonBackReference
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Client client; // Add relation in Client

    @JsonBackReference
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Worker worker; // Add relation in Worker

    /*@ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();
    */
    // END BASE USER ATTRIBUTES

    // ---------------------------------------------------------------------------------------------
    // Constructors (Constructor Default & AllArgs implemented with Lombok)
    //
    // Getters and Setters (Implemented with Lombok)
    // ---------------------------------------------------------------------------------------------
}