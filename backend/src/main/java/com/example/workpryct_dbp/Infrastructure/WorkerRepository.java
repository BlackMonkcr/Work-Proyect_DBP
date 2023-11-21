package com.example.workpryct_dbp.Infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.workpryct_dbp.Domain.*;

import java.util.Optional;

public interface WorkerRepository extends JpaRepository<Worker, Long> {}