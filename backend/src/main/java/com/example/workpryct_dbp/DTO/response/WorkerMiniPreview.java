package com.example.workpryct_dbp.DTO.response;

import com.example.workpryct_dbp.Domain.Worker;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class WorkerMiniPreview {
    private Long id;
    private String name;
    private String occupation;
    private String keyProfilePicture;

    public WorkerMiniPreview(Worker worker) {
        this.id = worker.getWorker_id();
        this.name = worker.getUser().getName();
        this.occupation = worker.getOccupation();
        this.keyProfilePicture = worker.getUser().getUsername();
    }

    public WorkerMiniPreview() {}
}
