import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'uniqueBrand'
})
export class UniqueBrandPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'brand') ;
    }
    return value;
  }


}
