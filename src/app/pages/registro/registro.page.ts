import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  handlerMessage = '';
  roleMessage = '';


  constructor(private alertController: AlertController
   ) { }

ngOnInit() {
}






//crea ventana con input de datos
async input() {
const alert = await this.alertController.create({
header: 'Por favor, ingrese sus datos',

buttons: ['Registrar'],
inputs: [
{
placeholder: 'Nombre completo',
},
{
placeholder: 'Correo institucional',

},
{
type: 'password',
placeholder: 'Contraseña',
attributes:{
  minlength: '6',
  maxlenght: '12'
},
},
],
});

await alert.present();
}

}
