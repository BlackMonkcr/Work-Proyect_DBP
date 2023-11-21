package com.example.workpryct_dbp.DTO.request;

import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Domain.Worker;

import lombok.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WorkerRequest implements UserDetails{
    private User user;
    private Worker worker;

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