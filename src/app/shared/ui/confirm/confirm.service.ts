import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmComponent } from './confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private bsModalService: BsModalService, private bsModalRef: BsModalRef) { }

  public showConfirm(initialState: any) {
    return this.bsModalService.show(ConfirmComponent, { initialState });
  }
}
