import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'uniqueColor'
})
export class UniqueColorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'color') ;
    }
    return value;
  }

}
