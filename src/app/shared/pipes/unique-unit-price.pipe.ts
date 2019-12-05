import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'uniqueUnitPrice'
})
export class UniqueUnitPricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'unitPrice') ;
    }
    return value;
  }
}
