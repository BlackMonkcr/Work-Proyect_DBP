package com.example.workpryct_dbp.Domain;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Entity
@Table(name = "clients")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Client implements UserDetails {
    // ---------------------------------------------------------------------------------------------
    // CLIENT ATTRIBUTES

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long client_id;

    @OneToOne
    private User user;

    @ManyToMany
    @JoinTable(
        name = "favorite_workers",
        joinColumns = @JoinColumn(name = "client_id"),
        inverseJoinColumns = @JoinColumn(name = "worker_id")
    )
    private Set<Worker> favorite_workers = new HashSet<>();

    @PrePersist
    public void prePersist() {
        this.favorite_workers = new HashSet<>();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(getUser().getRole().name()));
    }

    @Override
    public String getUsername() {
        return getUser().getEmail();
    }

    @Override
    public String getPassword() {
        return getUser().getPassword();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

