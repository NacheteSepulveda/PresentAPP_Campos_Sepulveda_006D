import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteasisPage } from './docenteasis.page';

const routes: Routes = [
  {
    path: '',
    component: DocenteasisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteasisPageRoutingModule {}
