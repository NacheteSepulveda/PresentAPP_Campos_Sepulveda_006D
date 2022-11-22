import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetDocenteService } from '../../services/get-docente.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

 
  constructor(private menuController: MenuController,
              private navcontroller: NavController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  public getNombre(){
    return GetDocenteService.Docente;
  }

  async cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.navcontroller.navigateRoot('selecusuario'); 
  };




}
