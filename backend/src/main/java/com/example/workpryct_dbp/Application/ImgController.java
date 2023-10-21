package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.Services.ImgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.workpryct_dbp.Domain.*;

import java.util.List;

@RestController
@RequestMapping("/img")
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

    @PostMapping
    public ResponseEntity<Img> createImg(@RequestBody Img img) {
        return new ResponseEntity<>(imgService.createImg(img), HttpStatus.CREATED);
    } // Returns created plan

    @PutMapping
    public ResponseEntity<Img> updateImg(@RequestParam Long id, @RequestBody Img img) {
        if (imgService.getImgById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(imgService.updateImg(id, img), HttpStatus.OK);
        }
    } // Returns updated plan

    @PatchMapping
    public ResponseEntity<Img> pathImg(@RequestParam Long id, @RequestBody Img img) {
        if (imgService.getImgById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(imgService.patchImgDescription(id, img), HttpStatus.OK);
        }
    } // Returns updated plan

    @DeleteMapping
    public ResponseEntity<Img> deleteImg(@RequestParam Long id) {
        if (imgService.getImgById(id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            imgService.deleteImg(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    } // Deletes plan

    @GetMapping("/user")
    public ResponseEntity<User> getUserByImg(@RequestParam Long img_id) {
        if (imgService.getImgById(img_id).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(imgService.getUserByImg(img_id), HttpStatus.OK);
        }
    } // Returns user who uploaded img

}
