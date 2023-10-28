package com.example.workpryct_dbp.DTO;

import com.example.workpryct_dbp.Domain.User;

public class UserMiniPreview {
    private Long id;
    private String name;
    private String occupation;
    private String location;
    private String keyProfilePicture;

    public UserMiniPreview(User user) {
        this.id = user.getUser_id();
        this.name = user.getName();
        this.occupation = user.getLocation();
        this.location = user.getLocation();
        this.keyProfilePicture = user.getUsername();
    }

    public UserMiniPreview() {}

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getOccupation() {
        return occupation;
    }

    public String getLocation() {
        return location;
    }

    public String getKeyProfilePicture() {
        return keyProfilePicture;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name= name;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setKeyProfilePicture(String keyProfilePicture) {
        this.keyProfilePicture = keyProfilePicture;
    }
}
