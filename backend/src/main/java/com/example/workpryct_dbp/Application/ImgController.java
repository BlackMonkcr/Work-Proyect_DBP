package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.Services.ImgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.workpryct_dbp.Domain.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/img")
@CrossOrigin(origins = "*")
public class ImgController {
    private final ImgService imgService;

    @Autowired
    public ImgController(ImgService imgService) {
        this.imgService = imgService;
    }

    @GetMapping
    public ResponseEntity<List<Img>> getAllImg() {
        return new ResponseEntity<>(imgService.getAllImg(), HttpStatus.OK);
    } // Returns all Img

    @GetMapping("/{id}")
    public ResponseEntity<Img> getImgById(@RequestParam Long id) {
        if (imgService.getImgById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(imgService.getImgById(id).get(), HttpStatus.OK);
        }
    } // Returns Img by id

    @GetMapping("/{url}")
    public ResponseEntity<Img> getImgByUrl(@PathVariable String url) {
        if (imgService.getImgByUrl(url).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(imgService.getImgByUrl(url).get(), HttpStatus.OK);
        }
    } // Returns Img by url

    @PostMapping("/profile_picture_worker")
    public ResponseEntity<Img> createImg_profilePictureWorker(@RequestBody Img img, @RequestParam Long worker_id) {
        return new ResponseEntity<>(imgService.createImage_ProfilePictureWorker(worker_id, img), HttpStatus.CREATED);
    } // Returns created profile_picture

    @PostMapping("/profile_picture_client")
    public ResponseEntity<Img> createImg_profilePictureClient(@RequestBody Img img, @RequestParam Long client_id) {
        return new ResponseEntity<>(imgService.createImage_ProfilePictureClient(client_id, img), HttpStatus.CREATED);
    } // Returns created profile_picture

    @PostMapping("/upload")
    public ResponseEntity<Img> createImg_workerPicture(@RequestBody Img img, @RequestParam Long worker_id) {
        return new ResponseEntity<>(imgService.addWorkerPicture(worker_id, img), HttpStatus.CREATED);
    } // Returns created worker_picture

    @PutMapping
    public ResponseEntity<Img> updateImg(@RequestParam Long id, @RequestBody Img img) {
        if (imgService.getImgById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(imgService.updateImg(id, img), HttpStatus.OK);
        }
    } // Returns updated Img

    @PatchMapping
    public ResponseEntity<Img> pathImg(@RequestParam Long id, @RequestBody Img img) {
        if (imgService.getImgById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(imgService.patchImgDescription(id, img), HttpStatus.OK);
        }
    } // Returns updated Img

    @DeleteMapping("/worker")
    public ResponseEntity<Img> deleteImgWorker(@RequestParam Long img_id, @RequestParam Long worker_id) {
        if (imgService.getImgById(img_id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            imgService.removeWorkerPicture(worker_id, img_id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    } // Deletes worker_picture

    @DeleteMapping("/profile_picture")
    public ResponseEntity<Img> deleteImgProfilePicture(@RequestParam Long img_id, @RequestParam Long user_id) {
        if (imgService.getImgById(img_id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            imgService.removeUserPicture(user_id, img_id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    } // Deletes profile_picture

}
