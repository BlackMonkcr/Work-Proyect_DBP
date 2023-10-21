package com.example.workpryct_dbp.Services;

import com.example.workpryct_dbp.Domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.workpryct_dbp.Infrastructure.UserRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    } // Returns all users

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    } // False if not found (with id)

    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    } // False if not found (with username)

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    } // False if not found (with email)

    public Optional<User> getUserByPhone(Long phone) {
        return userRepository.findByPhone(phone);
    } // False if not found (with phone)

    public User createUser(User user) {
        return userRepository.save(user);
    } // Returns created user
}
