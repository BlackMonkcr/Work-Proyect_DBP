package com.example.workpryct_dbp.DTO.response;

import java.util.List;

import com.example.workpryct_dbp.Domain.Client;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class historyClient {
    private Long id;
    private String name;
    private String email;
    private String keyProfilePicture;

    public historyClient(Client client) {
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
}
