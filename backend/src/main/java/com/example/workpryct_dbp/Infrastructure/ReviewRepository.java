package com.example.workpryct_dbp.Infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.workpryct_dbp.Domain.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {}