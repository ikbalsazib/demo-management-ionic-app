import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryPageRoutingModule } from './inventory-routing.module';

import { InventoryPage } from './inventory.page';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {PipesModule} from '../shared/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AngularMaterialModule,
        InventoryPageRoutingModule,
        PipesModule
    ],
  declarations: [InventoryPage]
})
export class InventoryPageModule {}
