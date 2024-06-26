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
@Table(name = "workers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Worker {
    // ---------------------------------------------------------------------------------------------
    // CLIENT ATTRIBUTES

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long worker_id;

    @Column(name = "phone", nullable = false, unique = true)
    private Long phone;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "is_available", nullable = false)
    private boolean is_available;

    @Column(name = "is_premium", nullable = false)
    private boolean is_premium;

    @Column(name = "hour_price", nullable = false)
    private Double hour_price;

    @Column(name = "occupation", nullable = false)
    private String occupation;

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

    @JsonIgnore
    @ManyToMany(mappedBy = "history_workers")
    private Set<Client> history_clients = new HashSet<>();

    @PrePersist
    public void prePersist() {
        this.is_premium = false;
        this.plan = null;
        this.work_images = new HashSet<>();
        this.favorite_clients = new HashSet<>();
    }
}
