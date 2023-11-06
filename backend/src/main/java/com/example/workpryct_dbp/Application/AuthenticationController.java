package com.example.workpryct_dbp.Application;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.workpryct_dbp.DTO.request.SignUpRequest;
import com.example.workpryct_dbp.DTO.request.SigninRequest;
import com.example.workpryct_dbp.DTO.response.JwtAuthenticationResponse;
import com.example.workpryct_dbp.Services.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping("/signup")
    public ResponseEntity<JwtAuthenticationResponse> signup(@RequestBody SignUpRequest request) {
        return ResponseEntity.ok(authenticationService.signup(request));
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SigninRequest request) {
        return ResponseEntity.ok(authenticationService.signin(request));
    }
}