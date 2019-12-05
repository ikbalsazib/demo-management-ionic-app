import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueBrandPipe } from './unique-brand.pipe';
import { UniqueModelPipe } from './unique-model.pipe';
import { UniqueCcPipe } from './unique-cc.pipe';
import { UniqueColorPipe } from './unique-color.pipe';
import { UniqueCostPricePipe } from './unique-cost-price.pipe';
import { UniqueUnitPricePipe } from './unique-unit-price.pipe';



@NgModule({
  declarations: [UniqueBrandPipe, UniqueModelPipe, UniqueCcPipe, UniqueColorPipe, UniqueCostPricePipe, UniqueUnitPricePipe],
  imports: [
    CommonModule
  ],
  exports: [UniqueBrandPipe, UniqueModelPipe, UniqueCcPipe, UniqueColorPipe, UniqueCostPricePipe, UniqueUnitPricePipe]
})
export class PipesModule { }
