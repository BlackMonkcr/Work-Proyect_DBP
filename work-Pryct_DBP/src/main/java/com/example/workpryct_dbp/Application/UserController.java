package com.example.workpryct_dbp.Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.workpryct_dbp.Domain.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    } // Returns all users

    @GetMapping("/id")
    public User getUserById(@RequestParam Long id) {
        return userService.getUserById(id);
    } // False if not found (with id)

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.CREATED);
    } // Returns created user
}
