package com.example.workpryct_dbp.Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.workpryct_dbp.Domain.*;

import java.util.List;

@RestController
@RequestMapping("/UploadImg")
public class ImgUploadController {
    private final ImgUploadService imgUploadService;

    @Autowired
    public ImgUploadController(ImgUploadService imgUploadService) {
        this.imgUploadService = imgUploadService;
    }

    @PostMapping
    public Img uploadImg(@RequestParam Long user_id, @RequestParam Long img) {
        return imgUploadService.uploadImg(user_id, img);
    } // Returns created Img
}
