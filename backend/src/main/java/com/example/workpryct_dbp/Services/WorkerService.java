package com.example.workpryct_dbp.Services;

import com.example.workpryct_dbp.Domain.Img;
import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Domain.Client;
import com.example.workpryct_dbp.Domain.Worker;
import com.example.workpryct_dbp.Infrastructure.ClientRepository;
import com.example.workpryct_dbp.Infrastructure.ImgRepository;
import com.example.workpryct_dbp.Infrastructure.WorkerRepository;
import com.example.workpryct_dbp.Infrastructure.UserRepository;

import org.hibernate.jdbc.Work;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class WorkerService {
    private final ClientRepository clientRepository;
    private final UserRepository userRepository;
    private final WorkerRepository workerRepository;
    private final ImgRepository imgRepository;

    @Autowired
    public WorkerService(ClientRepository clientRepository,
                         UserRepository userRepository,
                         WorkerRepository workerRepository,
                         ImgRepository imgRepository) {
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
        this.workerRepository = workerRepository;
        this.imgRepository = imgRepository;
    }

    public List<Worker> getAllWorkers() {
        return workerRepository.findAll();
    } // Returns all clients

    public Optional<Worker> getWorkerById(Long id) {
        return workerRepository.findById(id);
    } // False if not found

    public Worker createWorker(User user, Worker worker) {
        userRepository.save(user);
        worker.setUser(user);
        workerRepository.save(worker);
        user.setWorker(worker);
        userRepository.save(user);
        return worker;
    } // Returns created client

    public Worker updateWorker(Long id, User user) {
        Optional<Worker> workerOptional = workerRepository.findById(id);
        if (workerOptional.isPresent()) {
            Worker worker = workerOptional.get();
            userRepository.save(user);
            worker.setUser(user);
            workerRepository.save(worker);
            return worker;
        }
        return null;
    } // Returns updated client

    public boolean deleteWorker(Long id) {
        Optional<Worker> workerOptional = workerRepository.findById(id);
        if (workerOptional.isPresent()) {
            Worker worker = workerOptional.get();
            workerRepository.delete(worker);
            return true;
        }
        return false;
    } // False if not found

    public Set<Img> getImgWorker(Long id) {
        Optional<Worker> workerOptional = workerRepository.findById(id);
        if (workerOptional.isPresent()) {
            Worker worker = workerOptional.get();
            return worker.getWork_images();
        }
        return null;
    } // False if not found
}
