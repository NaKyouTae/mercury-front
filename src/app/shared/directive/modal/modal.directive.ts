import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[nktModal]'
})
export class ModalDirective {
  @Input() modal: any;

  constructor() {}

  @HostListener('dblclick') onClick() {
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
