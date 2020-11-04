import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public get<T>(key: string): T {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : value;
  }

  public set<T>(key: string, value: any): void {
    localStorage.setItem(key, value);
  }
}
