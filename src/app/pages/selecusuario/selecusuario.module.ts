import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecusuarioPageRoutingModule } from './selecusuario-routing.module';

import { SelecusuarioPage } from './selecusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecusuarioPageRoutingModule
  ],
  declarations: [SelecusuarioPage]
})
export class SelecusuarioPageModule {}
