import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[RowModal]',
})
export class RowModalDirective {
  @Input() modal: any;

  constructor() { }

  @HostListener('dblclick') onDblClick() {
    this.modal.style.display = 'block';
    console.log('dblclick');
  }

  // @HostListener('document:click') onDocumentClick(e: any) {
  //   const modal = this.id;
  //   if (e.target === modal) {
  //     modal.style.display = 'none';
  //   }
  // }
}
