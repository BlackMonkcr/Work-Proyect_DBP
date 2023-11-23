package com.example.workpryct_dbp.DTO.response;

import com.example.workpryct_dbp.Domain.Worker;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WorkerRequest {
    private Long id;
    private String name;
    private String occupation;
    private Long phone;
    private String description;
    private String keyProfilePicture;
    public WorkerRequest(Worker worker) {
        this.id = worker.getWorker_id();
        this.name = worker.getUser().getName();
        this.occupation = worker.getOccupation();
        this.phone = worker.getPhone();
        this.description = worker.getDescription();
        this.keyProfilePicture = worker.getUser().getName();
        for (int i = 0; i < this.keyProfilePicture.length(); i++) {
            if (this.keyProfilePicture.charAt(i) == ' ') {
                this.keyProfilePicture = this.keyProfilePicture.substring(0, i) + this.keyProfilePicture.substring(i + 1);
                i--;
            }
        }
    }
}
