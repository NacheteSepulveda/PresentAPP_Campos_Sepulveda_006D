import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetDatosService } from '../../services/get-datos.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {

  constructor(private menuController: MenuController,
              private navcontroller: NavController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  public getNombre(){
    return GetDatosService.Alumno;
  }

  async cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.navcontroller.navigateRoot('selecusuario'); 
  };

}
