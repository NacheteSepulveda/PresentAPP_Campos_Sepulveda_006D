import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocenteasisPageRoutingModule } from './docenteasis-routing.module';

import { DocenteasisPage } from './docenteasis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocenteasisPageRoutingModule
  ],
  declarations: [DocenteasisPage]
})
export class DocenteasisPageModule {}
