import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[RowModal]',
})
export class RowModalDirective {
  @Input() modal: any;

  constructor() {}

  @HostListener('dblclick') onDblClick() {
    this.modal.style.display = 'block';
  }

  @HostListener('document:click') onDocumentClick() {
    // tslint:disable-next-line: deprecation
    const target: any = window.event.target;

    if (target.className === 'modal') {
      target.style.display = 'none';
    } else {
      // tslint:disable-next-line: deprecation
      window.event.stopPropagation();
    }
  }
}
