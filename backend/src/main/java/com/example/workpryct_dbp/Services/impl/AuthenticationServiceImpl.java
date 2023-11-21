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
        var user = User.builder().name(request.getName()).username(request.getEmail())
                .email(request.getEmail()).password(passwordEncoder.encode(request.getPassword()))
                .role(Role.CLIENT).phone(000000000L).city("").precise_location("").build();
        userRepository.save(user);

        var client = Client.builder().user(user).build();
        user.setClient(clientRepository.save(client));

        client.setUser(user);
        clientRepository.save(client);
        userRepository.save(user);

        ClientRequest clientRequest = new ClientRequest(user, client);

        var jwt = jwtService.generateToken(clientRequest);
        return JwtAuthenticationResponse.builder().token(jwt).role("CLIENT").build();
    }

    @Override
    public JwtAuthenticationResponse signupWorker(SignUpWorkerRequest request) {
        var user = User.builder().name(request.getName()).username(request.getEmail())
                .email(request.getEmail()).password(passwordEncoder.encode(request.getPassword()))
                .role(Role.WORKER).phone(000000000L).city("")
                .precise_location("").build();
        userRepository.save(user);

        var worker = Worker.builder().user(user).build();
        user.setWorker(workerRepository.save(worker));
        worker.setUser(user);

        workerRepository.save(worker);
        userRepository.save(user);

        WorkerRequest workerRequest = new WorkerRequest(user, worker);

        var jwt = jwtService.generateToken(workerRequest);
        return JwtAuthenticationResponse.builder().token(jwt).role("WORKER").build();
    }

    @Override
    public JwtAuthenticationResponse signin(SigninRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        String jwt = null;
        String role = null;

        if (clientRepository.findByEmail(request.getEmail()).isPresent()) {
            var client = clientRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
            jwt = jwtService.generateToken(client);
            role = "CLIENT";
        }
        else if (workerRepository.findByEmail(request.getEmail()).isPresent()) {
            var worker = workerRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
            jwt = jwtService.generateToken(worker);
            role = "WORKER";
        }

        return JwtAuthenticationResponse.builder().token(jwt).role(role).build();
    }

}