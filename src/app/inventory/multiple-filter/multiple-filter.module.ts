import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultipleFilterPageRoutingModule } from './multiple-filter-routing.module';

import { MultipleFilterPage } from './multiple-filter.page';
import {AngularMaterialModule} from '../../angular-material/angular-material.module';
import {PipesModule} from '../../shared/pipes/pipes.module';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MultipleFilterPageRoutingModule,
        AngularMaterialModule,
        PipesModule,
        AutocompleteLibModule
    ],
  declarations: [MultipleFilterPage]
})
export class MultipleFilterPageModule {}
