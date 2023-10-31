package com.example.workpryct_dbp.Domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.Set;
import java.util.HashSet;

@Entity
@Table(name = "role")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long role_id;

    @Enumerated(EnumType.STRING)
    private RoleUser role;

    @ManyToMany(mappedBy = "roles")
    private Set<User> users = new HashSet<>();

    // ---------------------------------------------------------------------------------------------
    // Constructors (Constructor Default & AllArgs implemented with Lombok)
    //
    // Getters and Setters (Implemented with Lombok)
    // ---------------------------------------------------------------------------------------------

    // Asegura que el rol sea uno de los valores del enum RoleUser
    @PrePersist
    @PreUpdate
    private void validateRole() {
        if (role == null) {
            throw new IllegalArgumentException("Role no puede ser nulo");
        }
        // Verifica si el rol es válido
        boolean isValid = false;
        for (RoleUser validRole : RoleUser.values()) {
            if (role.equals(validRole)) {
                isValid = true;
                break;
            }
        }
        if (!isValid) {
            throw new IllegalArgumentException("Role no es válido");
        }
    }
}
