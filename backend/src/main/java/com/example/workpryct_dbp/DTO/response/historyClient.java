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

    public historyClient(Client client) {
        this.id = client.getClient_id();
        this.name = client.getUser().getName();
        this.email = client.getUser().getEmail();
    }
}
