import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/user/principal/principal.component';
import { AspirantesComponent } from './components/user/aspirantes/aspirantes.component';
import { NavvComponent } from './components/nav/navv/navv.component';

import { AyudaComponent } from './components/user/ayuda/ayuda.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PanelAdminComponent } from './components/admin/panel-admin/panel-admin.component';
import { BarraOpcionesComponent } from './components/admin/barra-opciones/barra-opciones.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WatchComponent } from './components/admin/panel/watch/watch.component';
import { RegistroAspiranteComponent } from './components/user/registro-aspirante/registro-aspirante.component'
import { DatosEscolaresComponent } from './components/admin/barra-opciones/datos-escolares/datos-escolares.component';
import { RegistroDatosPersonalesComponent } from './components/user/registro-aspirante/registro-datos-personales/registro-datos-personales.component';
import { PersonalesBajaComponent } from './components/admin/panel-admin/personales-baja/personales-baja.component';
import { PipesPipe } from './pipe/datos-personales/pipes.pipe';
import { WatchDatosEscolaresComponent } from './components/admin/panel/watch-datos-escolares/watch-datos-escolares.component';
import { DatosIngresoComponent } from './components/admin/barra-opciones/datos-ingreso/datos-ingreso.component';
import { RegistroDatosIngresoComponent } from './components/user/registro-aspirante/registro-datos-ingreso/registro-datos-ingreso.component';
import { WatchDatosIngresoComponent } from './components/admin/panel/watch-datos-ingreso/watch-datos-ingreso.component';
import { DatosFtdComponent } from './components/admin/barra-opciones/datos-ftd/datos-ftd.component';
import { RegistroDatosFtdComponent } from './components/user/registro-aspirante/registro-datos-ftd/registro-datos-ftd.component';
import { WatchDatosFtdComponent } from './components/admin/panel/watch-datos-ftd/watch-datos-ftd.component';
import { FtdBajaComponent } from './components/admin/panel-admin/ftd-baja/ftd-baja.component';
import { EscolaresBajaComponent } from './components/admin/panel-admin/escolares-baja/escolares-baja.component';
import { IngresoBajaComponent } from './components/admin/panel-admin/ingreso-baja/ingreso-baja.component';
import { UniversidadComponent } from './components/admin/barra-opciones/datos-escolares/universidad/universidad.component';
import { ModalidadEscolarComponent } from './components/admin/barra-opciones/datos-escolares/modalidad-escolar/modalidad-escolar.component';
import { PlanEducativoComponent } from './components/admin/barra-opciones/datos-escolares/plan-educativo/plan-educativo.component';
import { PerfilamientoComponent } from './components/admin/barra-opciones/datos-ingreso/perfilamiento/perfilamiento.component';
import { TramiteComponent } from './components/admin/barra-opciones/datos-ingreso/tramite/tramite.component';
import { ModalidadComponent } from './components/admin/barra-opciones/datos-ingreso/modalidad/modalidad.component';
import { BecaComponent } from './components/admin/barra-opciones/datos-ftd/beca/beca.component';
import { GrupoComponent } from './components/admin/barra-opciones/datos-ftd/grupo/grupo.component';
import { TutorComponent } from './components/admin/barra-opciones/datos-ftd/tutor/tutor.component';
import { DatosEscolaresPipe } from './pipe/datos-escolares/datos-escolares.pipe';
import { DatosIngresoPipe } from './pipe/datos-ingreso/datos-ingreso.pipe';
import { CursosComponent } from './components/admin/barra-opciones/datos-ftd/cursos/cursos.component';
import { LoginAlumnoComponent } from './components/alumno/login-alumno/login-alumno.component';
import { BarraAlumnoComponent } from './components/alumno/barra-alumno/barra-alumno.component';
import { PanelAlumnoComponent } from './components/alumno/panel-alumno/panel-alumno.component';
import { PeriodoComponent } from './components/admin/barra-opciones/datos-escolares/periodo/periodo.component';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AspirantesComponent,
    NavvComponent,
    AyudaComponent,
    LoginComponent,
    PanelAdminComponent,
    BarraOpcionesComponent,
    WatchComponent,
    RegistroAspiranteComponent,
    DatosEscolaresComponent,
    RegistroDatosPersonalesComponent,
    PersonalesBajaComponent,
    PipesPipe,
    WatchDatosEscolaresComponent,
    DatosIngresoComponent,
    RegistroDatosIngresoComponent,
    WatchDatosIngresoComponent,
    DatosFtdComponent,
    RegistroDatosFtdComponent,
    WatchDatosFtdComponent,
    FtdBajaComponent,
    EscolaresBajaComponent,
    IngresoBajaComponent,
    UniversidadComponent,
    ModalidadEscolarComponent,
    PlanEducativoComponent,
    PerfilamientoComponent,
    TramiteComponent,
    ModalidadComponent,
    BecaComponent,
    GrupoComponent,
    TutorComponent,
    DatosEscolaresPipe,
    DatosIngresoPipe,
    CursosComponent,
    LoginAlumnoComponent,
    BarraAlumnoComponent,
    PanelAlumnoComponent,
    PeriodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
