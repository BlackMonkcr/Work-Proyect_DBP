package com.example.workpryct_dbp.Services.impl;

import com.example.workpryct_dbp.DTO.request.SignUpClientRequest;
import jakarta.persistence.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.workpryct_dbp.DTO.request.*;
import com.example.workpryct_dbp.DTO.response.JwtAuthenticationResponse;
import com.example.workpryct_dbp.Domain.*;
import com.example.workpryct_dbp.Infrastructure.*;
import com.example.workpryct_dbp.Services.*;
import com.example.workpryct_dbp.Services.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final ClientRepository clientRepository;
    private final WorkerRepository workerRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public JwtAuthenticationResponse signupClient(SignUpClientRequest request) {

        var client = Client.builder().build();

        clientRepository.save(client);

        var user = User.builder().name(request.getName()).username(request.getEmail())
                .email(request.getEmail()).password(passwordEncoder.encode(request.getPassword()))
                .role(Role.CLIENT).client(client).build();

        client.setUser(userRepository.save(user));
        clientRepository.save(client);

        var jwt = jwtService.generateToken(user);
        return JwtAuthenticationResponse.builder().token(jwt).role(Role.CLIENT).build();
    }

    @Override
    public JwtAuthenticationResponse signupWorker(SignUpWorkerRequest request) {
        var worker = Worker.builder()
                .is_available(false)
                .is_premium(false)
                .hour_price(0.0)
                .occupation(request.getOccupation())
                .description("")
                .phone(request.getPhoneNumber())
                .build();

        workerRepository.save(worker);

        var user = User.builder().name(request.getName()).username(request.getEmail())
                .email(request.getEmail()).password(passwordEncoder.encode(request.getPassword()))
                .role(Role.WORKER).worker(worker).build();

        worker.setUser(userRepository.save(user));

        var jwt = jwtService.generateToken(user);
        return JwtAuthenticationResponse.builder().token(jwt).role(Role.WORKER).build();
    }

    @Override
    public JwtAuthenticationResponse signin(SigninRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String jwt = jwtService.generateToken(userDetails);

        return JwtAuthenticationResponse.builder().token(jwt).role(Role.valueOf(userDetails.getAuthorities().iterator().next().getAuthority())).build();
    }

}