import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsService } from 'src/app/shared/util/forms.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[BtnModal]',
})
export class BtnModalDirective {
  @Input() modal: any = {};

  constructor(private dialog: MatDialog, private form: FormsService) { }

  @HostListener('click') public onClick() {
    this.dialog.open(this.modal.temp, {
      width: this.modal.width,
      height: this.modal.height,
      data: this.form.initialForm(this.modal.data),
    });
  }

  // @HostListener('document:click') public onDocumentClick(e: any) {
  //   const modal = this.id;
  //   if (e.target === modal) {
  //     modal.style.display = 'none';
  //   }
  // }
}
