package com.humans.resource.entity.DatosFTD;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@Table (name = "tutor")
public class Tutor {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

     private Long id;

     private String nombre;

}
