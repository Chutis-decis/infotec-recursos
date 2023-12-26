import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universidad } from 'src/app/datos_escolares/Universidad';
import { UniversidadService } from 'src/app/service/escolar/universidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unuversidad-baja',
  templateUrl: './unuversidad-baja.component.html'
})
export class UnuversidadBajaComponent {
  universidad: Universidad [] = [];
  uni: Universidad = new Universidad();


  constructor(private uniService: UniversidadService, private activatedRouter: ActivatedRoute) { }


  getUniversidad(): void {
    this.uniService.getUniversidad().subscribe(
      (universidad) => this.universidad = universidad
    );
  }
  
  ngOnInit(): void {
    this.getUniversidad();
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.uniService.getUniversidadById(id).subscribe((universidad) => this.uni = universidad)
      }
    });
  }

  /* Eliminar */
  deleteUni(university: Universidad): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que deseas move la universidad ${university.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.uniService.activatedUniversidad(university).subscribe(
          res => {
            this.universidad = this.universidad.filter(b => b !== university)
            Swal.fire('Univiersidad Movida', `Universidad ${university.nombre} mmovida con éxito`, 'success');
          }
        )
      }
    })
  }
}
