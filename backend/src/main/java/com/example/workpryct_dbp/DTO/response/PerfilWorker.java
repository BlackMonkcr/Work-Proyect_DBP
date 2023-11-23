package com.example.workpryct_dbp.DTO.response;

import com.example.workpryct_dbp.Domain.Worker;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PerfilWorker {
    private Long id;
    private String name;
    private String email;
    private Long phone;
    private String occupation;
    private String description;
    private double hourPrice;
    private String keyProfilePicture;

    public PerfilWorker(Worker worker) {
        this.id = worker.getWorker_id();
        this.name = worker.getUser().getName();
        this.email = worker.getUser().getEmail();
        this.phone = worker.getPhone();
        this.occupation = worker.getOccupation();
        this.description = worker.getDescription();
        this.hourPrice = worker.getHour_price();
        this.keyProfilePicture = worker.getUser().getName();
        for (int i = 0; i < this.keyProfilePicture.length(); i++) {
            if (this.keyProfilePicture.charAt(i) == ' ') {
                this.keyProfilePicture = this.keyProfilePicture.substring(0, i) + this.keyProfilePicture.substring(i + 1);
                i--;
            }
        }
    }

    public PerfilWorker() {}
}