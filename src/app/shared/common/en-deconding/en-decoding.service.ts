import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnDecodingService {

  constructor() { }

  public enCoding(data: any) {

    Object.keys(data).forEach((item) => {
      // tslint:disable-next-line: no-eval
      item = encodeURIComponent(eval('data.' + item));
    });

    return data;
  }

  public deCoding(data: any) {

    Object.keys(data).forEach((item) => {
      // tslint:disable-next-line: no-eval
      item = decodeURIComponent(eval('data.' + item));
    });

    return data;
  }
}
