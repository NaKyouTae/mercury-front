import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonValidationService {

  constructor() { }


  public getEmailReg(): string {
    return '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  }
}
