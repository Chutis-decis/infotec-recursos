package com.humans.resource.entity.DatosIngreso;


import com.humans.resource.entity.DatosIngreso.DatosIngreso;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "Modalidad")
public class Modalidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id ;
     private String nombre;

}
