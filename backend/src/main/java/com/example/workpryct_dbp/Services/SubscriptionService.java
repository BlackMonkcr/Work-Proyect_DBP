package com.example.workpryct_dbp.Services;

import com.example.workpryct_dbp.Domain.Plan;
import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Domain.Worker;
import com.example.workpryct_dbp.Infrastructure.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.workpryct_dbp.Infrastructure.PlanRepository;
import com.example.workpryct_dbp.Infrastructure.UserRepository;

import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class SubscriptionService {
    private final PlanRepository planRepository;
    private final WorkerRepository workerRepository;

    @Autowired
    public SubscriptionService(PlanRepository planRepository,
                               WorkerRepository workerRepository) {
        this.planRepository = planRepository;
        this.workerRepository = workerRepository;
    }

    public void subscribeWorker(Long plan_id, Long worker_id) {
        Plan planToUpdate = planRepository.findById(plan_id).orElseThrow();
        Worker workerAdd = workerRepository.findById(worker_id).orElseThrow();
        Set<Worker> workers = planToUpdate.getWorkers();
        workers.add(workerAdd);
        workerAdd.setPlan(planToUpdate);
        workerAdd.set_premium(true);
        planToUpdate.setWorkers(workers);
        workerRepository.save(workerAdd);
        planRepository.save(planToUpdate);
    } // Subscribes user to plan

    public void unsubscribeWorker(Long plan_id, Long worker_id) {
        Plan planToUpdate = planRepository.findById(plan_id).orElseThrow();
        Worker workerRemove = workerRepository.findById(worker_id).orElseThrow();
        Set<Worker> workers = planToUpdate.getWorkers();
        workers.remove(workerRemove);
        workerRemove.setPlan(null);
        workerRemove.set_premium(false);
        planToUpdate.setWorkers(workers);
        workerRepository.save(workerRemove);
        planRepository.save(planToUpdate);
    } // Unsubscribes user from plan

    public void changePlan(Long plan_id, Long worker_id) {
        Plan planChange = planRepository.findById(plan_id).orElseThrow();
        Worker workerChange = workerRepository.findById(worker_id).orElseThrow();
        Set<Worker> workers = workerChange.getPlan().getWorkers();

        workers.remove(workerChange);
        workerChange.getPlan().setWorkers(workers);
        workerChange.setPlan(planChange);

        workers = planChange.getWorkers();
        workers.add(workerChange);
        planChange.setWorkers(workers);
        workerChange.set_premium(true);

        workerRepository.save(workerChange);
        planRepository.save(planChange);
    } // Unsubscribes user from plan
}
