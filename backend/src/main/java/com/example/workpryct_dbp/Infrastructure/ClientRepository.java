package com.example.workpryct_dbp.Infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.workpryct_dbp.Domain.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {}