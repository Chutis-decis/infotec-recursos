package com.humans.resource.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Perfilamiento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombrePerfilamiento;

    @OneToMany(mappedBy = "perfilamiento", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<DatosIngreso> datosIngresoList;

}
