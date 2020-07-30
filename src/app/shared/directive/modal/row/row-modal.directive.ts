import { Directive, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[RowModal]',
})
export class RowModalDirective {
  @Input() modal: any = {};

  constructor(private dialog: MatDialog) { }

  @HostListener('dblclick') public onDblClick() {
    this.dialog.open(this.modal.temp, {
      width: this.modal.width,
      height: this.modal.height,
      data: this.modal.data,
    });
  }

  // @HostListener('document:click') public onDocumentClick() {
  //   // tslint:disable-next-line: deprecation
  //   const target: any = window.event.target;

  //   if (target.className === 'modal') {
  //     target.style.display = 'none';
  //   } else {
  //     // tslint:disable-next-line: deprecation
  //     window.event.stopPropagation();
  //   }
  // }
}
