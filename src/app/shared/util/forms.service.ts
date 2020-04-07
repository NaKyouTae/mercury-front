import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  constructor() {}

  formToData(form: any) {
    const data = {};

    Object.keys(form).forEach(item => {
      // tslint:disable-next-line: no-eval
      data[item] = eval('form.' + item + '.value');
    });
    return data;
  }
}
