package com.example.workpryct_dbp.Domain;

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
    } // False if not found (with id)

    public Optional<Img> getImgByUrl(String url) {
        return imgRepository.findByUrl(url);
    } // False if not found (with url)

    public Img createImg(Img img) {
        if (userRepository.findByUsername(img.getUser().getUsername()).isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User userUpload = userRepository.findByUsername(img.getUser().getUsername()).get();
        img.setUser(userUpload);
        imgRepository.save(img);
        userUpload.setProfile_picture(img);
        return img;
    } // Returns created plan

    public Img updateImg(Long id, Img img) {
        Img imgToUpdate = imgRepository.findById(id).orElseThrow();
        imgToUpdate.setAlt(img.getAlt());
        imgToUpdate.setUrl(img.getUrl());
        imgToUpdate.setDescription(img.getDescription());
        imgToUpdate.setUpload_date(img.getUpload_date());
        return imgRepository.save(imgToUpdate);
    } // Returns updated plan

    public Img patchImgDescription(Long id, Img img) {
        Img imgToUpdate = imgRepository.findById(id).orElseThrow();
        imgToUpdate.setDescription(img.getDescription());
        return imgRepository.save(imgToUpdate);
    } // Returns updated plan

    public void deleteImg(Long id) {
        imgRepository.deleteById(id);
    } // Deletes plan
}
