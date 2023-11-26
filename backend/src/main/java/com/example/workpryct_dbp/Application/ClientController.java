package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.DTO.request.ClientRequest;
import com.example.workpryct_dbp.DTO.response.PerfilClient;
import com.example.workpryct_dbp.DTO.response.PerfilWorker;
import com.example.workpryct_dbp.DTO.response.WorkerMiniPreview;
import com.example.workpryct_dbp.DTO.response.WorkersInformation;
import com.example.workpryct_dbp.Services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.workpryct_dbp.Domain.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/client")
@CrossOrigin(origins = "*")
public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Client>> getAllClients() {
        return new ResponseEntity<>(clientService.getAllClients(), HttpStatus.OK);
    } // Returns all clients

    @GetMapping
    public ResponseEntity<Client> getClientById(@RequestParam Long id) {
        if (clientService.getClientById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(clientService.getClientById(id).get(), HttpStatus.OK);
        }
    } // Returns client by id

    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody ClientRequest clientRequest) {
        User user = clientRequest.getUser();
        Client client = clientRequest.getClient();
        return new ResponseEntity<>(clientService.createClient(user, client), HttpStatus.CREATED);
    } // Returns created client

    @PutMapping
    public ResponseEntity<Client> updateClient(@RequestParam Long id, @RequestBody User user) {
        if (clientService.getClientById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(clientService.updateClient(id, user), HttpStatus.OK);
        }
    } // Returns updated client

    @DeleteMapping
    public ResponseEntity<?> deleteClient(@RequestParam Long id) {
        if (clientService.getClientById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            clientService.deleteClient(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    } // Deletes client

    @GetMapping("/history_workers/all")
    public ResponseEntity<?> getHistoryWorkers(@RequestParam Long id) {
        if (clientService.getClientById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(clientService.getHistoryWorkers(id), HttpStatus.OK);
        }
    } // Returns history workers

    @PostMapping("/history_workers")
    public ResponseEntity<?> addHistoryWorker(@RequestParam Long id, @RequestParam Long worker) {
        if (clientService.getClientById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(clientService.addHistoryWorker(id, worker), HttpStatus.OK);
        }
    } // Returns updated client

    @GetMapping("/favorite_workers/all")
    public ResponseEntity<?> getFavoriteWorkers(@RequestParam Long id) {
        if (clientService.getClientById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(clientService.getFavoriteWorkers(id), HttpStatus.OK);
        }
    } // Returns favorite workers

    @GetMapping("/favorite_workers")
    public ResponseEntity<?> getFavoriteWorker(@RequestParam Long id, @RequestParam Long limit) {
        if (clientService.getClientById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            WorkersInformation workers = clientService.getFavoriteWorkers(id);
            return new ResponseEntity<>(workers, HttpStatus.OK);
        }
    } // Returns favorite worker

    @PostMapping("/favorite_workers")
    public ResponseEntity<?> addFavoriteWorker(@RequestParam Long id, @RequestParam Long worker) {
        if (clientService.getClientById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(clientService.addFavoriteWorker(id, worker), HttpStatus.OK);
        }
    } // Returns updated client

    @DeleteMapping("/favorite_workers")
    public ResponseEntity<?> deleteFavoriteWorker(@RequestParam Long id, @RequestParam Long worker) {
        if (clientService.getClientById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(clientService.deleteFavoriteWorker(id, worker), HttpStatus.OK);
        }
    } // Returns updated client

    @PostMapping("/favorite_workers/all")
    public ResponseEntity<?> addFavoriteWorker(@RequestParam Long id, @RequestBody Set<Long> worker) {
        if (clientService.getClientById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(clientService.addFavoriteWorkers(id, worker), HttpStatus.OK);
        }
    } // Returns updated client

    @DeleteMapping("/favorite_workers/all")
    public ResponseEntity<?> deleteAllFavoriteWorker(@RequestParam Long id) {
        if (clientService.getClientById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(clientService.deleteAllFavoriteWorkers(id), HttpStatus.OK);
        }
    } // Returns updated client

    @GetMapping("/perfil")
    public ResponseEntity<PerfilClient> getPerfilWorker(@RequestParam String email) {
        if (clientService.getPerfilClient(email) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(clientService.getPerfilClient(email), HttpStatus.OK);
        }
    } // Returns worker by user_id
}
