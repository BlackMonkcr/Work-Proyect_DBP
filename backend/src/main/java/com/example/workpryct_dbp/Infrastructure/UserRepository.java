package com.example.workpryct_dbp.Infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.workpryct_dbp.Domain.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}