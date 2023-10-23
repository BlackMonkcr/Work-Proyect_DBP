package com.example.workpryct_dbp.Services;

import com.example.workpryct_dbp.Domain.Img;
import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Infrastructure.ImgRepository;
import com.example.workpryct_dbp.Infrastructure.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ImgService {
    private final ImgRepository imgRepository;
    private final UserRepository userRepository;

    @Autowired
    public ImgService(ImgRepository imgRepository,
                       UserRepository userRepository) {
        this.imgRepository = imgRepository;
        this.userRepository = userRepository;
    }

    public List<Img> getAllImg() {
        return imgRepository.findAll();
    } // Returns all Img

    public Optional<Img> getImgById(Long id) {
        return imgRepository.findById(id);
    } // Optional Img search by Id

    public Optional<Img> getImgByUrl(String url) {
        return imgRepository.findByUrl(url);
    } // Optional Img search by Url

    public Img createImg(Img img) {
        return imgRepository.save(img);
    } // Returns created Img

    public Img updateImg(Long id, Img img) {
        Img imgToUpdate = imgRepository.findById(id).orElseThrow();
        imgToUpdate.setAlt(img.getAlt());
        imgToUpdate.setUrl(img.getUrl());
        imgToUpdate.setDescription(img.getDescription());
        imgToUpdate.setUpload_date(img.getUpload_date());
        return imgRepository.save(imgToUpdate);
    } // Returns updated Img

    public Img patchImgDescription(Long id, Img img) {
        Img imgToUpdate = imgRepository.findById(id).orElseThrow();
        imgToUpdate.setDescription(img.getDescription());
        return imgRepository.save(imgToUpdate);
    } // Returns patch updated Img

    public void deleteImg(Long id) {
        imgRepository.deleteById(id);
    } // Delete Img

    public User getUserByImg(Long img_id) {
        Img img = imgRepository.findById(img_id).orElseThrow();
        return img.getUser();
    } // Returns user who uploaded img
}
