package com.example.workpryct_dbp.Domain;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.workpryct_dbp.Infrastructure.UserRepository;

import org.springframework.stereotype.Service;

import java.util.List;
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

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow();
    } // False if not found (with id)

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow();
    } // False if not found (with username)

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow();
    } // False if not found (with email)

    public User getUserByPhone(Long phone) {
        return userRepository.findByPhone(phone).orElseThrow();
    } // False if not found (with phone)

    public User createUser(User user) {
        return userRepository.save(user);
    } // Returns created user
}
