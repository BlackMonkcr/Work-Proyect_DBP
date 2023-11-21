package com.example.workpryct_dbp.Services.impl;

import com.example.workpryct_dbp.DTO.request.*;
import com.example.workpryct_dbp.Infrastructure.ClientRepository;
import com.example.workpryct_dbp.Infrastructure.WorkerRepository;
import com.example.workpryct_dbp.Services.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.workpryct_dbp.Infrastructure.UserRepository;
import com.example.workpryct_dbp.Services.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final ClientRepository clientRepository;
    private final WorkerRepository workerRepository;
    @Override
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) {
                var client = clientRepository.findByEmail(username);
                if (client.isPresent()) {
                    return new ClientRequest(client.get().getUser(), client.get());
                }

                var worker = workerRepository.findByEmail(username);
                if (worker.isPresent()) {
                    return new WorkerRequest(worker.get().getUser(), worker.get());
                }
                throw new UsernameNotFoundException("User not found");
            }
        };
    }
}