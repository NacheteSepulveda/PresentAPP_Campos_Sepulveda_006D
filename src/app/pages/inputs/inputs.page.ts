import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ServicedatosService, Datos } from '../../services/servicedatos.service';
import { GetDocenteService } from '../../services/get-docente.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {    

  formularioLogin : FormGroup;
  datos : Datos[]=[];

  constructor(private alertController: AlertController,
              private navController: NavController,
              private servicedatosservice: ServicedatosService,
              private fb: FormBuilder ) {
                this.formularioLogin = this.fb.group({
                  'nombre' : new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                  ])),
                  'correo' : new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(12),
          
                  ])),
                  
                })
               }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a  = 0;
    this.servicedatosservice.getDatos().then(datos => {
      this.datos = datos; 
      if (datos.length==0){
        return null;
      }
      for (let obj of this.datos){
        if (obj.correo==f.correo && obj.password==f.password){
          a=1;
          console.log('ingresado');
          this.navController.navigateRoot('inicio');
          localStorage.setItem('ingresado','true');
          GetDocenteService.Docente = obj.nombre;
        }
      }//for
      if(a==0){
        this.alertMsg();
      }
    });
  }//método

  async alertMsg(){
    const alert = await this.alertController.create({ 
      header: '¡ERROR! :O',
      message: 'NO HAY REGISTRO DE LOS DATOS INGRESADOS, INTENTE NUEVAMENTE',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }



}
