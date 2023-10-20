package com.example.workpryct_dbp.Infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.workpryct_dbp.Domain.Plan;

import java.util.Optional;

public interface PlanRepository extends JpaRepository<Plan, Long> {
    Optional<Plan> findByName(String name);
}