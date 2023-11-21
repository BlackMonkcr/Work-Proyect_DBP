package com.example.workpryct_dbp.DTO.response;

import java.util.List;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WorkerInformationGEn {
    List<WorkerInformation> workerInformationList;
    String response;
}
