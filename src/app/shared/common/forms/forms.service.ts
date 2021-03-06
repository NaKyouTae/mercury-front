import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor() { }

  public formToData(form: any) {
    const data = {};

    Object.keys(form).forEach((item) => {
      // tslint:disable-next-line: no-eval
      if (eval('form.' + item) === null) {
        data[item] = null;
      } else {
        // tslint:disable-next-line: no-eval
        data[item] = eval('form.' + item + '.value');
      }
    });

    return data;
  }

  public initialForm(form: any) {
    const data = {};

    Object.keys(form).forEach((item) => {
      data[item] = null;
    });

    return data;
  }
}
