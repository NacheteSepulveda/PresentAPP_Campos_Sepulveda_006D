import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAlumno } from '../../../interfaces/alumno';
import { AlumnosService } from '../../alumnos.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.page.html',
  styleUrls: ['./agregar-alumno.page.scss'],
})
export class AgregarAlumnoPage implements OnInit {

  newAlumno: IAlumno = {
    nombre: "", 
    correo: ""
  }

  constructor(private alumnosService: AlumnosService, 
    private router: Router) { }

  ngOnInit() {
  }

  crearAlumno(){
    this.alumnosService.crearGatito(this.newAlumno).subscribe();
    this.router.navigateByUrl("/listar-alumnos");
  }

}
