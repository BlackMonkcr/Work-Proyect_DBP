package com.example.workpryct_dbp.DTO.request;

import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Domain.Worker;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EditPerfil {
    private String description;
    private Double hourPrice;

    public EditPerfil (Worker worker) {
        this.description = worker.getDescription();
        this.hourPrice = worker.getHour_price();
    }
}
