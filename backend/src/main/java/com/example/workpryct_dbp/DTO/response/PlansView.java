package com.example.workpryct_dbp.DTO.response;

import com.example.workpryct_dbp.Domain.Plan;

import java.util.List;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlansView {
    List<Plan> plans;
}
