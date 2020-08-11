import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridData'
})
export class GridDataPipe implements PipeTransform {

  transform(data: any, field: any): any {
    console.log('grid onData');
    // tslint:disable-next-line: no-eval
    return eval('data.' + field);
  }

}
