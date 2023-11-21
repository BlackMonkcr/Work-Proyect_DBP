package com.example.workpryct_dbp.DTO.request;

import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Domain.Client;

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
public class ClientRequest {
    private User user;
    private Client client;
}