import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'gridData',
})
export class GridDataPipe implements PipeTransform {
  transform(data: any, field: any, type: string): any {
    // tslint:disable-next-line: no-eval
    const result = eval('data.' + field);
    if (result !== null) {
      if (type == null) {
        return result;
      } else if (type === 'string') {
        return result;
      } else if (type === 'date') {
        return result.slice(0, 16);
      } else if (type === 'boolean') {
        if (result) {
          return '승인';
        } else {
          return '미승인';
        }
      } else if (type === 'number') {
        return String(result).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    } else {
      return '';
    }
  }
}
