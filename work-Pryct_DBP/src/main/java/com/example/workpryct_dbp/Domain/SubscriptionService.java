package com.example.workpryct_dbp.Domain;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.workpryct_dbp.Infrastructure.PlanRepository;
import com.example.workpryct_dbp.Infrastructure.UserRepository;

import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class SubscriptionService {
    private final PlanRepository planRepository;
    private final UserRepository userRepository;

    @Autowired
    public SubscriptionService(PlanRepository planRepository,
                               UserRepository userRepository) {
        this.planRepository = planRepository;
        this.userRepository = userRepository;
    }

    public void subscribeUser(Long plan_id, Long user_id) {
        Plan planToUpdate = planRepository.findById(plan_id).orElseThrow();
        User userAdd = userRepository.findById(user_id).orElseThrow();
        Set<User> users = planToUpdate.getUsers();
        users.add(userAdd);
        userAdd.setPlan(planToUpdate);
        planToUpdate.setUsers(users);
        userRepository.save(userAdd);
        planRepository.save(planToUpdate);
    } // Subscribes user to plan

    public void unsubscribeUser(Long plan_id, Long user_id) {
        Plan planToUpdate = planRepository.findById(plan_id).orElseThrow();
        User userRemove = userRepository.findById(user_id).orElseThrow();
        Set<User> users = planToUpdate.getUsers();
        users.remove(userRemove);
        userRemove.setPlan(null);
        planToUpdate.setUsers(users);
        userRepository.save(userRemove);
        planRepository.save(planToUpdate);
    } // Unsubscribes user from plan
}
