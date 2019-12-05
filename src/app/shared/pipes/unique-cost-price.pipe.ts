import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'uniqueCostPrice'
})
export class UniqueCostPricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'costPrice') ;
    }
    return value;
  }

}
