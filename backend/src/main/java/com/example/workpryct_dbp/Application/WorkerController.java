package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.DTO.request.WorkerRequest;
import com.example.workpryct_dbp.DTO.response.PerfilWorker;
import com.example.workpryct_dbp.DTO.response.WorkerInformation;
import com.example.workpryct_dbp.DTO.response.WorkerInformationGEn;
import com.example.workpryct_dbp.Services.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.workpryct_dbp.Domain.*;

import java.util.List;

@RestController
@RequestMapping("/worker")
@CrossOrigin(origins = "*")
public class WorkerController {
    private final WorkerService workerService;

    @Autowired
    public WorkerController(WorkerService workerService) {
        this.workerService = workerService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Worker>> getAllWorkers() {
        return new ResponseEntity<>(workerService.getAllWorkers(), HttpStatus.OK);
    } // Returns all workers

    @GetMapping
    public ResponseEntity<Worker> getWorkerById(@RequestParam Long id) {
        if (workerService.getWorkerById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(workerService.getWorkerById(id).get(), HttpStatus.OK);
        }
    } // Returns worker by id

    @GetMapping("/homeCards")
    public ResponseEntity<WorkerInformationGEn> getHomeCards(@RequestParam int limit) {
        return new ResponseEntity<>(workerService.getWorkersLimit(limit), HttpStatus.OK);
    } // Returns worker by id

    @GetMapping("/perfil")
    public ResponseEntity<PerfilWorker> getPerfilWorker(@RequestParam Long worker_id) {
        if (workerService.getWorkerById(worker_id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(new PerfilWorker(workerService.getWorkerById(worker_id).get()), HttpStatus.OK);
        }
    } // Returns worker by user_id

    @PostMapping
    public ResponseEntity<Worker> createWorker(@RequestBody WorkerRequest workerRequest) {
        User user = workerRequest.getUser();
        Worker worker = workerRequest.getWorker();
        return new ResponseEntity<>(workerService.createWorker(user, worker), HttpStatus.CREATED);
    } // Returns created worker

    @DeleteMapping
    public ResponseEntity<?> deleteWorker(@RequestParam Long id) {
        if (workerService.getWorkerById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            workerService.deleteWorker(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    } // Deletes worker
}
