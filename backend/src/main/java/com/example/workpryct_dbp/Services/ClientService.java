package com.example.workpryct_dbp.Services;

import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Domain.Client;
import com.example.workpryct_dbp.Domain.Worker;
import com.example.workpryct_dbp.Infrastructure.ClientRepository;
import com.example.workpryct_dbp.Infrastructure.WorkerRepository;
import com.example.workpryct_dbp.Infrastructure.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ClientService {
    private final ClientRepository clientRepository;
    private final UserRepository userRepository;
    private final WorkerRepository workerRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository,
                         UserRepository userRepository,
                         WorkerRepository workerRepository) {
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
        this.workerRepository = workerRepository;
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    } // Returns all clients

    public Optional<Client> getClientById(Long id) {
        return clientRepository.findById(id);
    } // False if not found

    public Client createClient(User user, Client client) {
        userRepository.save(user);
        client.setUser(user);
        clientRepository.save(client);
        user.setClient(client);
        userRepository.save(user);
        return client;
    } // Returns created client

    public Client updateClient(Long id, User user) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            userRepository.save(user);
            client.setUser(user);
            clientRepository.save(client);
            return client;
        }
        return null;
    } // Returns updated client

    public boolean deleteClient(Long id) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            clientRepository.delete(client);
            return true;
        }
        return false;
    } // False if not found

    public Set<Worker> getFavoriteClients(Long id) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            return client.getFavorite_workers();
        }
        return null;
    } // False if not found

    public Client addFavoriteWorker(Long id, Long worker_id) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        Optional<Worker> workerOptional = workerRepository.findById(worker_id);
        if (clientOptional.isPresent() && workerOptional.isPresent()) {
            Client client = clientOptional.get();
            client.getFavorite_workers().add(workerOptional.get());
            clientRepository.save(client);
            return client;
        }
        return null;
    } // False if not found

    public Client deleteFavoriteWorker(Long id, Long worker_id) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        Optional<Worker> workerOptional = workerRepository.findById(worker_id);
        if (clientOptional.isPresent() && workerOptional.isPresent()) {
            Client client = clientOptional.get();
            client.getFavorite_workers().remove(workerOptional.get());
            clientRepository.save(client);
            return client;
        }
        return null;
    } // False if not found

    public Client deleteAllFavoriteWorkers(Long id) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            client.getFavorite_workers().clear();
            clientRepository.save(client);
            return client;
        }
        return null;
    } // False if not found

    public Client addFavoriteWorkers(Long id, Set<Worker> workers) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            client.getFavorite_workers().addAll(workers);
            clientRepository.save(client);
            return client;
        }
        return null;
    } // False if not found
}
