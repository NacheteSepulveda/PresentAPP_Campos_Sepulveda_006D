import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecusuarioPage } from './selecusuario.page';

const routes: Routes = [
  {
    path: '',
    component: SelecusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecusuarioPageRoutingModule {}
