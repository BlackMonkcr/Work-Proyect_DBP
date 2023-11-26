package com.example.workpryct_dbp.DTO.response;

import com.example.workpryct_dbp.Domain.Client;
import com.example.workpryct_dbp.Domain.Worker;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PerfilClient {
    private Long id;
    private String name;
    private String email;
    private String keyProfilePicture;

    public PerfilClient(Client client) {
        this.id = client.getClient_id();
        this.name = client.getUser().getName();
        this.email = client.getUser().getEmail();
        this.keyProfilePicture = client.getUser().getProfile_picture().getUrl();
    }

    public PerfilClient() {}
}