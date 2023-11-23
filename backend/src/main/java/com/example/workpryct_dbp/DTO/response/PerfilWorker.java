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

    public PerfilWorker(Worker worker) {
        this.id = worker.getWorker_id();
        this.name = worker.getUser().getName();
        this.email = worker.getUser().getEmail();
        this.phone = worker.getPhone();
        this.occupation = worker.getOccupation();
        this.description = worker.getDescription();
        this.hourPrice = worker.getHour_price();
    }

    public PerfilWorker() {}
}