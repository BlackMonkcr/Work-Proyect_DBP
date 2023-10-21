package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.Services.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/subscription")
public class SubscriptionController {
    private final SubscriptionService subscriptionService;

    @Autowired
    public SubscriptionController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @PostMapping
    public void subscribeUser(@RequestParam Long plan_id, @RequestParam Long user_id) {
        subscriptionService.subscribeUser(plan_id, user_id);
    } // Subscribes user to plan

    @PutMapping
    public void changePlan(@RequestParam Long plan_id, @RequestParam Long user_id) {
        subscriptionService.changePlan(plan_id, user_id);
    } // Changes user's plan

    @DeleteMapping
    public void unsubscribeUser(@RequestParam Long plan_id, @RequestParam Long user_id) {
        subscriptionService.unsubscribeUser(plan_id, user_id);
    } // Unsubscribes user from plan
}
