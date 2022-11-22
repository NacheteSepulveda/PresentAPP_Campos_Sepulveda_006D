import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormalumnoPageRoutingModule } from './formalumno-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormalumnoPage } from './formalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormalumnoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormalumnoPage]
})
export class FormalumnoPageModule {}
