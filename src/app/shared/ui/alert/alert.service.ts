import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertComponent } from './alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public interval: any;

  constructor(
    private bsModalService: BsModalService,
    private bsModalRef: BsModalRef) { }

  public showAlert(type: string, content: any) {
    let title = '';
    switch (type) {
      case 'success': title = 'Success! '; break;
      case 'info': title = 'Info! '; break;
      case 'warning': title = 'Warning! '; break;
      case 'danger': title = 'Danger! '; break;
      default: break;
    }

    this.bsModalRef = this.bsModalService.show(AlertComponent, { initialState: { type, title, content } });

    this.interval = setInterval(() => {
      this.bsModalRef.hide();
      clearTimeout(this.interval);
    }, 3000);
  }
}
