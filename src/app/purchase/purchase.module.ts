import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchasePageRoutingModule } from './purchase-routing.module';

import { PurchasePage } from './purchase.page';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {PipesModule} from '../shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularMaterialModule,
    PurchasePageRoutingModule,
    PipesModule
  ],
  declarations: [PurchasePage]
})
export class PurchasePageModule {}
