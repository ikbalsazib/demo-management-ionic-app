import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrtaPageRoutingModule } from './brta-routing.module';

import { BrtaPage } from './brta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrtaPageRoutingModule
  ],
  declarations: [BrtaPage]
})
export class BrtaPageModule {}
