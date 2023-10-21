package com.example.workpryct_dbp.Services;

import com.example.workpryct_dbp.Domain.Plan;
import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Infrastructure.PlanRepository;
import com.example.workpryct_dbp.Infrastructure.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class PlanService {
    private final PlanRepository planRepository;
    private final UserRepository userRepository;

    @Autowired
    public PlanService(PlanRepository planRepository,
                       UserRepository userRepository) {
        this.userRepository = userRepository;
        this.planRepository = planRepository;
    }

    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    } // Returns all plans

    public Optional<Plan> getPlanById(Long id) {
        return planRepository.findById(id);
    } // False if not found

    public Optional<Plan> getPlanByName(String name) {
        return planRepository.findByName(name);
    } // Returns plan by name

    public Plan createPlan(Plan plan) {
        return planRepository.save(plan);
    } // Returns created plan

    public Plan updatePlan(Long id, Plan plan) {
        Plan planToUpdate = planRepository.findById(id).orElseThrow();
        planToUpdate.setName(plan.getName());
        planToUpdate.setPrice(plan.getPrice());
        planToUpdate.setDescription(plan.getDescription());
        return planRepository.save(planToUpdate);
    } // Returns updated plan

    public Plan patchPlanPrice(Long id, Plan plan) {
        Plan planToUpdate = planRepository.findById(id).orElseThrow();
        planToUpdate.setPrice(plan.getPrice());
        return planRepository.save(planToUpdate);
    } // Returns updated plan

    public void deletePlan(Long id) {
        planRepository.deleteById(id);
    } // Deletes plan

    public Set<User> getUsersByPlan(Long plan_id) {
        Plan plan = planRepository.findById(plan_id).orElseThrow();
        return plan.getUsers();
    } // Returns users subscribed to plan
}
