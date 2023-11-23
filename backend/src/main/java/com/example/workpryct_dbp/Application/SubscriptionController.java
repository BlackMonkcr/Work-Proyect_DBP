package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.Services.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/subscription")
@CrossOrigin(origins = "*")
public class SubscriptionController {
    private final SubscriptionService subscriptionService;

    @Autowired
    public SubscriptionController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @PostMapping
    public void subscribeWorker(@RequestParam Long plan_id, @RequestParam Long worker_id) {
        subscriptionService.subscribeWorker(plan_id, worker_id);
    } // Subscribes user to plan

    @PutMapping
    public void changePlan(@RequestParam Long plan_id, @RequestParam Long worker_id) {
        subscriptionService.changePlan(plan_id, worker_id);
    } // Changes user's plan

    @DeleteMapping
    public void unsubscribeUser(@RequestParam Long plan_id, @RequestParam Long worker_id) {
        subscriptionService.unsubscribeWorker(plan_id, worker_id);
    } // Unsubscribes user from plan
}
