package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.Services.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.workpryct_dbp.Domain.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/plan")
@CrossOrigin(origins = "*")
public class PlanController {
    private final PlanService planService;

    @Autowired
    public PlanController(PlanService planService) {
        this.planService = planService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Plan>> getAllPlans() {
        return new ResponseEntity<>(planService.getAllPlans(), HttpStatus.OK);
    } // Returns all plans

    @GetMapping
    public ResponseEntity<Plan> getPlanById(@RequestParam Long id) {
        if (planService.getPlanById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(planService.getPlanById(id).get(), HttpStatus.OK);
        }
    } // Returns plan by id

    @GetMapping("/{name}")
    public ResponseEntity<Plan> getPlanByName(@PathVariable String name) {
        if (planService.getPlanByName(name).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(planService.getPlanByName(name).get(), HttpStatus.OK);
        }
    } // Returns plan by name

    @PostMapping
    public ResponseEntity<Plan> createPlan(@RequestBody Plan plan) {
        return new ResponseEntity<>(planService.createPlan(plan), HttpStatus.CREATED);
    } // Returns created plan

    @PutMapping
    public ResponseEntity<Plan> updatePlan(@RequestParam Long id, @RequestBody Plan plan) {
        if (planService.getPlanById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(planService.updatePlan(id, plan), HttpStatus.OK);
        }
    } // Returns updated plan

    @PatchMapping
    public ResponseEntity<Plan> patchPlan(@RequestParam Long id, @RequestBody Plan plan) {
        if (planService.getPlanById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(planService.patchPlanPrice(id, plan), HttpStatus.OK);
        }
    } // Returns updated plan

    @DeleteMapping
    public ResponseEntity<String> deletePlan(@RequestParam Long id) {
        if (planService.getPlanById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            planService.deletePlan(id);
            return new ResponseEntity<>("Deleted!", HttpStatus.OK);
        }
    } // Deletes plan

    @GetMapping("/users")
    public ResponseEntity<Set<Worker>> getUsersByPlan(@RequestParam Long plan_id) {
        if (planService.getPlanById(plan_id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(planService.getWorkersByPlan(plan_id), HttpStatus.OK);
        }
    } // Returns users subscribed to plan
}
