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
        this.keyProfilePicture = client.getUser().getName();
        for (int i = 0; i < this.keyProfilePicture.length(); i++) {
            if (this.keyProfilePicture.charAt(i) == ' ') {
                this.keyProfilePicture = this.keyProfilePicture.substring(0, i) + this.keyProfilePicture.substring(i + 1);
                i--;
            }
        }
    }

    public PerfilClient() {}
}