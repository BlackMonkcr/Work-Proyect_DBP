package com.example.workpryct_dbp.Infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.workpryct_dbp.Domain.Img;

import java.util.Optional;

public interface ImgRepository extends JpaRepository<Img, Long> {
    Optional<Img> findByUrl(String url);
}
