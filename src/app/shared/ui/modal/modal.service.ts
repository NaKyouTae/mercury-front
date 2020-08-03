import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  public onOpen(modal: any) {
    this.dialog.open(modal.temp, {
      width: modal.width,
      height: modal.height,
      data: modal.data,
    });
  }

  public onCloseAll() {
    this.dialog.closeAll();
  }
}
