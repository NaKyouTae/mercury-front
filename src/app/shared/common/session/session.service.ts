import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  public getSession(e: any) {
    return sessionStorage.getItem(e);
  }
}
