package com.example.workpryct_dbp.DTO.response;

import com.example.workpryct_dbp.Domain.Worker;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class WorkerInformation {
    private Long id;
    private String name;
    private String occupation;
    private String description;
    private String keyProfilePicture;
    private Double rating;

    public WorkerInformation(Worker worker) {
        this.id = worker.getWorker_id();
        this.name = worker.getUser().getName();
        this.occupation = worker.getOccupation();
        this.description = worker.getDescription();
        this.keyProfilePicture = (worker.getUser().getProfile_picture() == null) ? null : worker.getUser().getProfile_picture().getUrl();
        this.rating = worker.getUser().getRating();
    }

    public WorkerInformation() {}
}
