package com.example.workpryct_dbp.DTO.response;

import com.example.workpryct_dbp.Domain.Worker;
import com.example.workpryct_dbp.Domain.Client;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class PreviewProfile {
    private Long id;
    private String name;
    private String keyProfilePicture;


    public PreviewProfile(Client client) {
        this.id = client.getClient_id();
        this.name = client.getUser().getName();
        this.keyProfilePicture = client.getUser().getProfile_picture().getAlt();
    }
    public PreviewProfile(Worker worker) {
        this.id = worker.getWorker_id();
        this.name = worker.getUser().getName();
        this.keyProfilePicture = worker.getUser().getProfile_picture().getAlt();
    }

    public PreviewProfile() {}
}
