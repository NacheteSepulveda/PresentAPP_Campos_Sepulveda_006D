import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-qrescan',
  templateUrl: './qrescan.page.html',
  styleUrls: ['./qrescan.page.scss'],
})
export class QrescanPage implements OnInit {

  code: any;
  constructor(private menuController: MenuController,
              private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.code = barcodeData.text;
      
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
