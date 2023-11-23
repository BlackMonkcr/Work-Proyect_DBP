package com.example.workpryct_dbp.DTO.response;

import java.util.List;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WorkersInformation {
    List<WorkerInformation> workers;
}
