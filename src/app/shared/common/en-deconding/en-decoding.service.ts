import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnDecodingService {

  constructor() { }

  public enCoding(data: any) {
    const result: any = {};

    Object.keys(data).forEach(item => {
      // tslint:disable-next-line: no-eval
      result[item] = encodeURIComponent(eval('data.' + item));
    });

    return result;
  }

  public deCoding(data: any) {
    const result: any = {};

    Object.keys(data).forEach(item => {
      // tslint:disable-next-line: no-eval
      result[item] = decodeURIComponent(eval('data.' + item));
    });

    return result;
  }
}
