import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormsService } from 'src/app/shared/common/forms/forms.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[BtnModal]',
})
export class BtnModalDirective {
  @Input() modal: any = {};

  constructor(private dialog: MatDialog, private form: FormsService) { }

  @HostListener('click') public onClick() {
    const init = this.form.initialForm(this.modal.data.controls);
    const form: FormGroup = this.modal.data;
    const formData = form.reset(init);

    this.dialog.open(this.modal.temp, {
      width: this.modal.width,
      height: this.modal.height,
      data: formData,
    });
  }

  // @HostListener('document:click') public onDocumentClick(e: any) {
  //   const modal = this.id;
  //   if (e.target === modal) {
  //     modal.style.display = 'none';
  //   }
  // }
}
