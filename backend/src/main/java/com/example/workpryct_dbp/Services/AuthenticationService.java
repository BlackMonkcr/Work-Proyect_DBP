package com.example.workpryct_dbp.Services;

import com.example.workpryct_dbp.DTO.request.SignUpRequest;
import com.example.workpryct_dbp.DTO.request.SigninRequest;
import com.example.workpryct_dbp.DTO.response.JwtAuthenticationResponse;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}