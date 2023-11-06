package com.example.workpryct_dbp.Services.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.workpryct_dbp.DTO.request.SignUpRequest;
import com.example.workpryct_dbp.DTO.request.SigninRequest;
import com.example.workpryct_dbp.DTO.response.JwtAuthenticationResponse;
import com.example.workpryct_dbp.Domain.Role;
import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Infrastructure.UserRepository;
import com.example.workpryct_dbp.Services.AuthenticationService;
import com.example.workpryct_dbp.Services.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    @Override
    public JwtAuthenticationResponse signup(SignUpRequest request) {
        var user = User.builder().name(request.getName()).username(request.getUsername())
                .email(request.getEmail()).password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER).phone(request.getPhoneNumber()).city(request.getDistrict()).precise_location(request.getPrecise_location()).build();
        userRepository.save(user);
        var jwt = jwtService.generateToken(user);
        return JwtAuthenticationResponse.builder().token(jwt).build();
    }

    @Override
    public JwtAuthenticationResponse signin(SigninRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
        var jwt = jwtService.generateToken(user);
        return JwtAuthenticationResponse.builder().token(jwt).build();
    }
}