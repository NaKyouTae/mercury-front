import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getSession(e: any) {
    return sessionStorage.getItem(e);
  }
}
