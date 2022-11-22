import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-docenteasis',
  templateUrl: './docenteasis.page.html',
  styleUrls: ['./docenteasis.page.scss'],
})
export class DocenteasisPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

}
