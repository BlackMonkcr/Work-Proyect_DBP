package com.example.workpryct_dbp.DTO.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SignUpWorkerRequest {
    private String name;
    private String email;
    private String password;
    private Long phoneNumber;
    private String occupation;
}