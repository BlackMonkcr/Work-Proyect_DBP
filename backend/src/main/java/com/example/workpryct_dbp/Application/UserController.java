package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.workpryct_dbp.Domain.*;
import com.example.workpryct_dbp.DTO.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173/")
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
    public Optional<User> getUserById(@RequestParam Long id) {
        if (userService.getUserById(id).isEmpty()) {
            return Optional.empty();
        } else {
            return userService.getUserById(id);
        }
    } // False if not found (with id)

    @GetMapping("/limits")
    public ResponseEntity<List<UserMiniPreview>> getUsersByLimits(@RequestParam int limit) {
        List<User> users = userService.getAllUsers();
        if (limit > users.size())
            limit = users.size();

        List<UserMiniPreview> usersMiniPreview = new ArrayList<>();

        for (int i = 0; i < limit; i++) {
            usersMiniPreview.add(new UserMiniPreview(users.get(i)));
        }

        return new ResponseEntity<>(usersMiniPreview, HttpStatus.OK);
    } // Returns users by limits

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.CREATED);
    } // Returns created user

    @GetMapping("/plan")
    public ResponseEntity<Plan> getPlanByUser(@RequestParam Long user_id) {
        if (userService.getUserById(user_id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(userService.getUserById(user_id).get().getPlan(), HttpStatus.OK);
        }
    } // Returns plan by user

    @GetMapping("/profile-picture")
    public ResponseEntity<Img> getProfilePhotoByUser(@RequestParam Long user_id) {
        if (userService.getUserById(user_id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(userService.getUserById(user_id).get().getProfile_picture(), HttpStatus.OK);
        }
    } // Returns profile photo by user
}
