import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Datos, ServicedatosService } from '../../services/servicedatos.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  newDato: Datos = <Datos>{};
  @ViewChild('myList') myList: IonList;

  constructor(private fb: FormBuilder,
    private alertController: AlertController,
    private menuController: MenuController, 
    private serviceDatos: ServicedatosService, 
    private plt: Platform, 
    private toastController: ToastController) {
      this.formularioRegistro = this.fb.group({
        'nombre' : new FormControl("", Validators.required), 
        'correo' : new FormControl("", Validators.required), 
        'password': new FormControl("", Validators.required), 
        'rol': new FormControl("", Validators.required)
      })
     }

  ngOnInit() {}

  mostrarMenu() {
    this.menuController.open('first');
  }
  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid){
      this.alertError();
    }
    else{
    this.newDato.nombre=form.nombre;
    this.newDato.correo=form.correo;
    this.newDato.password = form.password;
    this.newDato.rol=form.rol;
    this.serviceDatos.addDatos(this.newDato).then(dato=>{ 
      this.newDato=<Datos>{};
      this.showToast('Usuario Registrado!');
    });
    this.formularioRegistro.reset();
  }
  }

  async alertError(){
    const alert = await this.alertController.create({ 
      header: 'ERROR :O',
      message: 'DEBE COMPLETAR TODOS LOS DATOS, HAGA CLICK EN "REGISTRAR" E INTENTELO NUEVAMENTE',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }
    
    


  



}
