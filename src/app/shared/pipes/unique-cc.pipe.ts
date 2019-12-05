import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'uniqueCc'
})
export class UniqueCcPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'cc') ;
    }
    return value;
  }
}
