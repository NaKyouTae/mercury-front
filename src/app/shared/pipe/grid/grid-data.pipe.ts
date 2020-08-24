import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'gridData'
})
export class GridDataPipe implements PipeTransform {

  transform(data: any, field: any): any {
    console.log('grid onData');

    if (field.includes('Date')) {
      // tslint:disable-next-line: no-eval
      return eval('data.' + field).slice(0, 16);
    }

    // tslint:disable-next-line: no-eval
    return eval('data.' + field);
  }

}
