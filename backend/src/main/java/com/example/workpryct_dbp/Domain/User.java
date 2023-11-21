package com.example.workpryct_dbp.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
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

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Img profile_picture;

    @JsonIgnore
    @OneToMany(mappedBy = "recipient")
    private List<Review> receivedReviews;

    @JsonIgnore
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Client client; // Add relation in Client

    @JsonIgnore
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Worker worker; // Add relation in Worker

    @Enumerated(EnumType.STRING)
    private Role role;
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

    @PrePersist
    public void prePersist() {
        this.is_verified = false;
        this.registration_date = new Date();
        this.number_reviews = 0;
        this.rating = 0.0;
        this.receivedReviews = new ArrayList<>();
        /*if (profile_picture == null) {
            this.profile_picture = createDefaultProfilePicture();
        }*/
    }


}