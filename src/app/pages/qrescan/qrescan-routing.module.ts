import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrescanPage } from './qrescan.page';

const routes: Routes = [
  {
    path: '',
    component: QrescanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrescanPageRoutingModule {}
