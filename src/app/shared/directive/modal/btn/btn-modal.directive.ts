import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[BtnModal]',
})
export class BtnModalDirective {
  @Input() modal: any;

  constructor() {}

  @HostListener('click') public onClick() {
    this.modal.style.display = 'block';
  }

  // @HostListener('document:click') public onDocumentClick(e: any) {
  //   const modal = this.id;
  //   if (e.target === modal) {
  //     modal.style.display = 'none';
  //   }
  // }
}
