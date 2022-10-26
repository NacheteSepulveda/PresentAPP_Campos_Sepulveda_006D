import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FeriadosService } from '../../services/feriados.service';



@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  
usuarios: any;
  constructor(private menuController: MenuController, private feriadosService: FeriadosService) { }

  ngOnInit() {
    this.feriadosService.getTopHeadLines().subscribe(resp => {
      console.log('usuario', resp);
      this.usuarios=resp;
    
    })
  }

  mostrarMenu()
  {
    this.menuController.open('first')
  }

}
