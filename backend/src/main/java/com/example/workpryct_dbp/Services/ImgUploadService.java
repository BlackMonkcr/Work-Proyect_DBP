package com.example.workpryct_dbp.Services;

import com.example.workpryct_dbp.Domain.Img;
import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Infrastructure.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.workpryct_dbp.Infrastructure.ImgRepository;
import com.example.workpryct_dbp.Infrastructure.UserRepository;

import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class ImgUploadService {
    private final ImgRepository imgRepository;
    private final UserRepository userRepository;

    @Autowired
    public ImgUploadService(ImgRepository imgRepository,
                               UserRepository userRepository) {
        this.imgRepository = imgRepository;
        this.userRepository = userRepository;
    }

    public Img uploadImg(Long user_id, Long img_id) {
        User userUpload = userRepository.findById(user_id).orElseThrow();
        Img img = imgRepository.findById(img_id).orElseThrow();
        img.setUser(userUpload);
        imgRepository.save(img);
        userUpload.setProfile_picture(img);
        userRepository.save(userUpload);
        return img;
    } // Returns created Img
}
