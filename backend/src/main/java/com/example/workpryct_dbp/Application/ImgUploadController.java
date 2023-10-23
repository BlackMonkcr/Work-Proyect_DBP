package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.Services.ImgUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.workpryct_dbp.Domain.*;

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
