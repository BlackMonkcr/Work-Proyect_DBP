package com.example.workpryct_dbp.Domain;

import org.springframework.security.core.GrantedAuthority;
import java.io.Serializable;


public enum RoleUser implements GrantedAuthority, Serializable {
    ROLE_ADMIN, ROLE_USER, ROLE_WORKER;

    public String getAuthority() {
        return name();
    }

}