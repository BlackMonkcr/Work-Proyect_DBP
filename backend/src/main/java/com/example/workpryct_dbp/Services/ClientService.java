package com.example.workpryct_dbp.Services;

import com.example.workpryct_dbp.DTO.response.*;
import com.example.workpryct_dbp.Domain.Role;
import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Domain.Client;
import com.example.workpryct_dbp.Domain.Worker;
import com.example.workpryct_dbp.Infrastructure.ClientRepository;
import com.example.workpryct_dbp.Infrastructure.WorkerRepository;
import com.example.workpryct_dbp.Infrastructure.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public WorkersInformation getFavoriteWorkers(Long id) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            List<WorkerInformation> workerInformationList = new ArrayList<>();
            for (Worker worker : client.getFavorite_workers()) {
                workerInformationList.add(new WorkerInformation(worker));
            }
            return new WorkersInformation(workerInformationList);
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

    public Client addFavoriteWorkers(Long id, Set<Long> workers_id) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            for (Long worker_id : workers_id) {
                Optional<Worker> workerOptional = workerRepository.findById(worker_id);
                if (workerOptional.isPresent()) {
                    client.getFavorite_workers().add(workerOptional.get());
                }
            }
            clientRepository.save(client);
            return client;
        }
        return null;
    } // False if not found

    public WorkersRequest getHistoryWorkers(Long id) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            List<WorkerRequest> workerRequestList = new ArrayList<>();
            for (Worker worker : client.getHistory_workers()) {
                workerRequestList.add(new WorkerRequest(worker));
            }
            return new WorkersRequest(workerRequestList);
        }
        return null;
    } // False if not found

    public Client addHistoryWorker(Long id, Long worker_id) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        Optional<Worker> workerOptional = workerRepository.findById(worker_id);
        if (clientOptional.isPresent() && workerOptional.isPresent()) {
            Client client = clientOptional.get();
            client.getHistory_workers().add(workerOptional.get());
            clientRepository.save(client);
            return client;
        }
        return null;
    } // False if not found

    public PerfilClient getPerfilClient(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent() && userOptional.get().getRole() == Role.CLIENT) {
            Client client = userOptional.get().getClient();
            return new PerfilClient(client);
        }
        return null;
    } // False if not found
}
