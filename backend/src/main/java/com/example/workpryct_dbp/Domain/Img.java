package com.example.workpryct_dbp.Domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "imgs")
@Getter
@Setter
@NoArgsConstructor
public class Img {
    // ---------------------------------------------------------------------------------------------
    // Img Attributes

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long img_id;

    @Column(name = "url", nullable = false, unique = true, length = 250)
    private String url;

    @Column(name = "alt", nullable = false, length = 50)
    private String alt;

    @Column(name = "description", nullable = false, length = 500)
    private String description;

    @Column(name = "upload_date", nullable = false)
    private Date upload_date;

    @JsonBackReference
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "worker_id", referencedColumnName = "worker_id")
    private Worker worker;

    // ---------------------------------------------------------------------------------------------
    // Constructors (Constructor Default implemented with Lombok)

    public Img(String url, String alt, String description, Date upload_date) {
        this.url = url;
        this.alt = alt;
        this.description = description;
        this.upload_date = upload_date;
    } // Constructor without User

    // ---------------------------------------------------------------------------------------------
    // Getters and Setters (Implemented with Lombok)
    // ---------------------------------------------------------------------------------------------

}
