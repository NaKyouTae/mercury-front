import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MileageObservableService {
  private source = new Subject<any>();
  public sourceObv = this.source.asObservable();

  constructor() { }

  public successRequest() {
    this.source.next();
  }
}
