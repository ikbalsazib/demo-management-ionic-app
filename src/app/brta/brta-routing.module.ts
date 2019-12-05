import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrtaPage } from './brta.page';

const routes: Routes = [
  {
    path: '',
    component: BrtaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrtaPageRoutingModule {}
