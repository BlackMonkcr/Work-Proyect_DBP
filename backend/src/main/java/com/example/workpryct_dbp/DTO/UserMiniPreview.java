package com.example.workpryct_dbp.DTO;

import com.example.workpryct_dbp.Domain.Worker;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserMiniPreview {
    private Long id;
    private String name;
    private String occupation;
    private String city;
    private String keyProfilePicture;

    public UserMiniPreview(Worker worker) {
        this.id = worker.getWorker_id();
        this.name = worker.getUser().getName();
        this.occupation = worker.getOccupation();
        this.city = worker.getUser().getCity();
        this.keyProfilePicture = worker.getUser().getUsername();
    }

    public UserMiniPreview() {}
}
