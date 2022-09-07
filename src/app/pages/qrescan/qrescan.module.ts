import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrescanPageRoutingModule } from './qrescan-routing.module';

import { QrescanPage } from './qrescan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrescanPageRoutingModule
  ],
  declarations: [QrescanPage]
})
export class QrescanPageModule {}
