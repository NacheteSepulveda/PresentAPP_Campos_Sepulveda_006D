import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-qrescan',
  templateUrl: './qrescan.page.html',
  styleUrls: ['./qrescan.page.scss'],
})
export class QrescanPage implements OnInit {

 
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }
}
