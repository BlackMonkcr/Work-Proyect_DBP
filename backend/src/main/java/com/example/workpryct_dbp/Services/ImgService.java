package com.example.workpryct_dbp.Services;

import com.example.workpryct_dbp.Domain.Img;
import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Domain.Worker;
import com.example.workpryct_dbp.Infrastructure.ImgRepository;
import com.example.workpryct_dbp.Infrastructure.UserRepository;

import com.example.workpryct_dbp.Infrastructure.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ImgService {
    private final ImgRepository imgRepository;
    private final UserRepository userRepository;

    private final WorkerRepository workerRepository;

    @Autowired
    public ImgService(ImgRepository imgRepository,
                       UserRepository userRepository,
                       WorkerRepository workerRepository) {
        this.imgRepository = imgRepository;
        this.userRepository = userRepository;
        this.workerRepository = workerRepository;
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

    public Img createImage_ProfilePicture(Long user_id, Img img) {
        User userUpload = userRepository.findById(user_id).orElseThrow();
        img.setUser(userUpload);
        imgRepository.save(img);
        userUpload.setProfile_picture(img);
        userRepository.save(userUpload);
        return img;
    } // Returns created Img

    public Img addWorkerPicture(Long worker_id, Img img) {
        Worker workerUpload = workerRepository.findById(worker_id).orElseThrow();
        img.setWorker(workerUpload);
        imgRepository.save(img);
        Set<Img> workerImages = workerUpload.getWork_images();
        workerImages.add(img);
        workerUpload.setWork_images(workerImages);
        workerRepository.save(workerUpload);
        return img;
    } // Returns created Img

    public Img removeWorkerPicture(Long worker_id, Long img_id) {
        Worker workerUpload = workerRepository.findById(worker_id).orElseThrow();
        Img img = imgRepository.findById(img_id).orElseThrow();
        img.setWorker(null);
        imgRepository.save(img);
        Set<Img> workerImages = workerUpload.getWork_images();
        workerImages.remove(img);
        workerUpload.setWork_images(workerImages);
        workerRepository.save(workerUpload);
        imgRepository.delete(img);
        return img;
    } // Returns created Img

    public Img removeUserPicture(Long user_id, Long img_id) {
        User userUpload = userRepository.findById(user_id).orElseThrow();
        Img img = imgRepository.findById(img_id).orElseThrow();
        img.setUser(null);
        imgRepository.save(img);
        userUpload.setProfile_picture(null);
        userRepository.save(userUpload);
        imgRepository.delete(img);
        return img;
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

    public User getUserProfilePictureByImg(Long img_id) {
        Img img = imgRepository.findById(img_id).orElseThrow();
        return img.getUser();
    } // Returns user who uploaded img

    public Worker getWorkerByImg(Long img_id) {
        Img img = imgRepository.findById(img_id).orElseThrow();
        return img.getWorker();
    } // Returns worker who uploaded img
}
