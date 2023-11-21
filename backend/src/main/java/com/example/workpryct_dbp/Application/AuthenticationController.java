package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.DTO.request.SignUpClientRequest;
import com.example.workpryct_dbp.DTO.request.SignUpWorkerRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.workpryct_dbp.DTO.request.*;
import com.example.workpryct_dbp.DTO.response.JwtAuthenticationResponse;
import com.example.workpryct_dbp.Services.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping("/signupWorker")
    public ResponseEntity<JwtAuthenticationResponse> signupWorker(@RequestBody SignUpWorkerRequest request) {
        return ResponseEntity.ok(authenticationService.signupWorker(request));
    }

    @PostMapping("/signupClient")
    public ResponseEntity<JwtAuthenticationResponse> signupClient(@RequestBody SignUpClientRequest request) {
        return ResponseEntity.ok(authenticationService.signupClient(request));
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SigninRequest request) {
        return ResponseEntity.ok(authenticationService.signin(request));
    }
}