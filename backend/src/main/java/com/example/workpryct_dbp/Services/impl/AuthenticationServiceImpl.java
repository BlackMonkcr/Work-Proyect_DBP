package com.example.workpryct_dbp.Services.impl;

import com.example.workpryct_dbp.DTO.request.SignUpClientRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
        var user = User.builder()
                .user_id(0L)
                .city("")
                .email(request.getEmail())
                .is_verified(false)
                .name(request.getName())
                .number_reviews(0)
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(000000000L)
                .precise_location("")
                .rating(0.0)
                .registration_date(new java.util.Date())
                .role(Role.CLIENT)
                .username(request.getEmail())
                .build();
        userRepository.save(user);

        var client = Client.builder().user(user).build();
        user.setClient(clientRepository.save(client));

        client.setUser(user);
        clientRepository.save(client);
        userRepository.save(user);

        ClientRequest clientRequest = new ClientRequest(user, client);

        var jwt = jwtService.generateToken(clientRequest);
        return JwtAuthenticationResponse.builder().token(jwt).role(Role.CLIENT).build();
    }

    @Override
    public JwtAuthenticationResponse signupWorker(SignUpWorkerRequest request) {
        var user = User.builder()
                .user_id(0L)
                .city("")
                .email(request.getEmail())
                .is_verified(false)
                .name(request.getName())
                .number_reviews(0)
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhoneNumber())
                .precise_location("")
                .rating(0.0)
                .registration_date(new java.util.Date())
                .role(Role.WORKER)
                .username(Role.WORKER.name())
                .build();
        userRepository.save(user);

        var worker = Worker.builder()
                .user(user)
                .occupation(request.getOccupation())
                .national_id(request.getDNI())
                .build();
        user.setWorker(workerRepository.save(worker));

        workerRepository.save(worker);
        userRepository.save(user);

        WorkerRequest workerRequest = new WorkerRequest(user, worker);

        var jwt = jwtService.generateToken(workerRequest);
        return JwtAuthenticationResponse.builder().token(jwt).role(Role.WORKER).build();
    }

    @Override
    public JwtAuthenticationResponse signin(SigninRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        String jwt = null;
        Role role = null;

        if (clientRepository.findByEmail(request.getEmail()).isPresent()) {
            var client = clientRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
            jwt = jwtService.generateToken(client);
            role = Role.CLIENT;
        }
        else if (workerRepository.findByEmail(request.getEmail()).isPresent()) {
            var worker = workerRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
            jwt = jwtService.generateToken(worker);
            role = Role.WORKER;
        }

        return JwtAuthenticationResponse.builder().token(jwt).role(role).build();
    }

}