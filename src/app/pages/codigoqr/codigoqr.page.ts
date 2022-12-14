import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})
export class CodigoqrPage implements OnInit {

  qrCodeString= 'Hola Mundo'; 
  scannedResult:any;


  constructor(private menuController: MenuController) { }

  usuario={
    nom:'',
    fecha: '',
    asig: ''
  }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

  generaScan(){
    this.qrCodeString= this.usuario.nom;
    this.qrCodeString= this.usuario.fecha;
    this.qrCodeString= this.usuario.asig;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }



}
