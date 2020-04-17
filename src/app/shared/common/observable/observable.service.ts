import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private source = new Subject<any>();
  public sourceObv = this.source.asObservable();

  constructor() { }

  getList(e: any) {
    this.source.next(e);
  }
}
