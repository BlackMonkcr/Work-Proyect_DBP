package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.DTO.request.EditPerfilWorker;
import com.example.workpryct_dbp.DTO.request.WorkerRequest;
import com.example.workpryct_dbp.DTO.response.PerfilWorker;
import com.example.workpryct_dbp.DTO.response.WorkersInformation;
import com.example.workpryct_dbp.Services.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.workpryct_dbp.Domain.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/worker")
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
    public ResponseEntity<WorkersInformation> getHomeCards(@RequestParam int limit) {
        return new ResponseEntity<>(workerService.getWorkersLimit(limit), HttpStatus.OK);
    } // Returns worker by id

    @GetMapping("/perfil")
    public ResponseEntity<PerfilWorker> getPerfilWorker(@RequestParam String email) {
        if (workerService.getPerfilWorker(email) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(workerService.getPerfilWorker(email), HttpStatus.OK);
        }
    } // Returns worker by user_id

    @GetMapping("/perfilById")
    public ResponseEntity<PerfilWorker> getPerfilWorkerById(@RequestParam Long id) {
        if (workerService.getPerfilWorkerById(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(workerService.getPerfilWorkerById(id), HttpStatus.OK);
        }
    } // Returns worker by user_id

    @PostMapping
    public ResponseEntity<Worker> createWorker(@RequestBody WorkerRequest workerRequest) {
        User user = workerRequest.getUser();
        Worker worker = workerRequest.getWorker();
        return new ResponseEntity<>(workerService.createWorker(user, worker), HttpStatus.CREATED);
    } // Returns created worker

    @PatchMapping
    public ResponseEntity<HttpStatus> PatchWorkerDescription_hp(@RequestParam String email,
                                                                @RequestBody EditPerfilWorker editPerfilWorker) {

        if (workerService.patchPerfilWorker(email, editPerfilWorker)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    } // Returns updated worker

    @DeleteMapping
    public ResponseEntity<?> deleteWorker(@RequestParam Long id) {
        if (workerService.getWorkerById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            workerService.deleteWorker(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    } // Deletes worker

    @GetMapping("/history_clients/all")
    public ResponseEntity<?> getHistoryClients(@RequestParam Long id) {
        if (workerService.getWorkerById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(workerService.getHistoryWorkers(id), HttpStatus.OK);
        }
    } // Returns history clients
}
