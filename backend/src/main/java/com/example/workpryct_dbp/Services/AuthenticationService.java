package com.example.workpryct_dbp.Services;

import com.example.workpryct_dbp.DTO.request.SignUpClientRequest;
import com.example.workpryct_dbp.DTO.request.SignUpWorkerRequest;
import com.example.workpryct_dbp.DTO.request.SigninRequest;
import com.example.workpryct_dbp.DTO.response.JwtAuthenticationResponse;

public interface AuthenticationService {
    JwtAuthenticationResponse signupClient(SignUpClientRequest request);
    JwtAuthenticationResponse signupWorker(SignUpWorkerRequest request);
    JwtAuthenticationResponse signin(SigninRequest request);
}