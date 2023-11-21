package com.example.workpryct_dbp.DTO.response;

import com.example.workpryct_dbp.Domain.Worker;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PerfilWorker {
    private String name;
    private String occupation;
    private String email;
    private Long phone;
    private String description;
    private String keyProfilePicture;


    public PerfilWorker(Worker worker) {
        this.name = worker.getUser().getName();
        this.occupation = worker.getOccupation();
        this.email = worker.getUser().getEmail();
        this.phone = worker.getPhone();
        this.description = worker.getDescription();
        this.keyProfilePicture = worker.getUser().getProfile_picture().getAlt();
    }

    public PerfilWorker() {}
}