import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleFilterPage } from './multiple-filter.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleFilterPageRoutingModule {}
