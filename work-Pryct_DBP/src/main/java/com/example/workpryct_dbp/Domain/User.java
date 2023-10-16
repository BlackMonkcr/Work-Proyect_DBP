package com.example.workpryct_dbp.Domain;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {
    // ---------------------------------------------------------------------------------------------
    // Any User Attributes (Client or Worker)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @Column(name = "username", nullable = false, length = 25, unique = true)
    private String username;

    @Column(name = "email", nullable = false, length = 200, unique = true)
    private String email;

    @Column(name = "phone", nullable = false, unique = true)
    private Long phone;

    @Column(name = "name", nullable = false, length = 200)
    private String name;

    @Column(name = "password", nullable = false, length = 50)
    private String password;

    @Column(name = "location", nullable = false, length = 300)
    private String location;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Img profile_picture; // Entity Img

    @Column(name = "registration_date", nullable = false)
    private Date registration_date;

    @Column(name = "is_worker", nullable = false)
    private Boolean is_worker;

    @Column(name = "is_premium", nullable = false)
    private Boolean is_premium;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "plan_id", referencedColumnName = "plan_id")
    private Plan plan; // Entity Plan

    // ---------------------------------------------------------------------------------------------
    // Worker Attributes

    @Column(name = "description", length = 500)
    private String description;

    @Column(name = "rating")
    private Double rating;

    @Column(name = "hour_price")
    private Double hour_price;

    @Column(name = "is_available")
    private Boolean is_available;

    @Column(name = "is_verified")
    private Boolean is_verified;

    @Column(name = "type_national_id", length = 25)
    private String type_national_id;

    @Column(name = "national_id", unique = true)
    private Long national_id;

    // @OneToMany
    // @Column(name = "reviews", nullable = true)
    // private Set<Review> reviews; // Entity Review

    // @OneToMany
    // @Column(name = "Offered_services", nullable = true)
    // private Set<Work_services> Offered_services; // Entity Work_services

    // @OneToMany
    // @Column(name = "service_requests", nullable = true)
    // private Set<Service_requests> service_requests; // Entity Service_requests

    // ---------------------------------------------------------------------------------------------
    // Constructors (Constructor Default implemented with Lombok)

    public User( String username, String email, Long phone, String name, String password,
                 String location, Date registration_date, Img profile_picture,
                 Boolean is_worker, Boolean is_premium)
    {

        this.username = username;
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.password = password;
        this.location = location;
        this.registration_date = registration_date;
        this.profile_picture = profile_picture;
        this.is_worker = is_worker;
        this.is_premium = is_premium;
        this.plan = plan;

    } // Constructor Basic (Client)

    public User( String username, String email, Long phone, String name, String password,
                 String location, Date registration_date, Img profile_picture,
                 Boolean is_worker, Boolean is_premium, Plan plan,
                 String description, Double rating, Double hour_price, Boolean is_available,
                 Boolean is_verified, String type_national_id, Long national_id
                 /*, Set<Review> reviews, Set<Work_services> Offered_services,
                   Set<Service_requests> service_requests*/ )
    {

        this.username = username;
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.password = password;
        this.location = location;
        this.registration_date = registration_date;
        this.profile_picture = profile_picture;
        this.is_worker = is_worker;
        this.is_premium = is_premium;
        this.plan = plan;
        this.description = description;
        this.rating = rating;
        this.hour_price = hour_price;
        this.is_available = is_available;
        this.is_verified = is_verified;
        this.type_national_id = type_national_id;
        this.national_id = national_id;
        // this.reviews = reviews;
        // this.Offered_services = Offered_services;
        // this.service_requests = service_requests;

    } // Constructor complete (Worker)

    // ---------------------------------------------------------------------------------------------
    // Getters and Setters (Implemented with Lombok)
    // ---------------------------------------------------------------------------------------------
}