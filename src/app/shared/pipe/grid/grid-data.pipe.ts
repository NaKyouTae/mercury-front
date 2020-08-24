import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'gridData'
})
export class GridDataPipe implements PipeTransform {

  transform(data: any, field: any): any {
    console.log('grid onData');
    // tslint:disable-next-line: no-eval
    let result = eval('data.' + field);

    if (field.includes('Date')) {

      if (result == null) {
        result = '';
      }

      return result.slice(0, 16);
    }

    return result;
  }

}
