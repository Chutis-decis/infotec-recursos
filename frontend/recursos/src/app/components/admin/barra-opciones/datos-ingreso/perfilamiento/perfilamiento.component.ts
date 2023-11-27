import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfilamiento } from 'src/app/perfilamiento';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfilamiento',
  templateUrl: './perfilamiento.component.html',
  styleUrls: ['./perfilamiento.component.css']
})
export class PerfilamientoComponent {
  perfilamiento: Perfilamiento[] = [];
  perf: Perfilamiento= new Perfilamiento();


  constructor(private ingresoService: IngresoService, private route: Router, private activatedRouter: ActivatedRoute){}

  ngOnInit(): void {
    this.getPerfilamiento();
    this.cargar();
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.ingresoService.getByIdPerfilamiento(id).subscribe((perfilamiento) => this.perf = perfilamiento)
      }
    });
  }

  /* Metodo para la obtencion de PERFILAMIENTO */
  getPerfilamiento(){
    this.ingresoService.obtencionPerfilamientoIngreso().subscribe(data => {
      this.perfilamiento = data;
      console.log(this.perfilamiento);
    });
  }

  create():void{
    console.log(this.perf);
    this.ingresoService.createIngresoPerfilamiento(this.perf).subscribe(
      res=> {
        this.route.navigate(['/datos-ingreso/perfilamiento'])
        Swal.fire('Agregaste un Perfilamiento', `${res.perfilamiento.nombrePerfilamiento}`, 'success');
      }
    );
  }

  update():void{
    this.ingresoService.editarIngresoPerfilamiento(this.perf).subscribe(
      e=> {
        this.route.navigate(['/datos-ingreso/perfilamiento'])
        Swal.fire('Editaste un Perfilamiento', `Editaste un dato de tipo perfilamiento`, 'success');
      }
    );
  }
  deletePerfilamineto(perfilamiento: Perfilamiento):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas Seguro?",
      text: `¿Seguro que desea eliminar el perfilamiento: ${perfilamiento.nombrePerfilamiento}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.ingresoService.eliminarPerfilamiento(perfilamiento).subscribe(
          response => {
            this.perfilamiento = this.perfilamiento.filter(cli => cli !== perfilamiento)
            swalWithBootstrapButtons.fire({
              title: "Perfilamiento Eliminado",
              text: `Perfilamiento ${perfilamiento.nombrePerfilamiento} eliminado con éxito!`,
              icon: "success"
            });
          }
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Cancelado parra el guardado de los datos del perfilamiento:)",
          icon: "error"
        });
      }
    });
  }
}
