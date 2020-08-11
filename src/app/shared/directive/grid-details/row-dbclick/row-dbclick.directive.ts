import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[RowDbclick]',
})
export class RowDbclickDirective {
  @Input() template: any = {};

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('dblclick') public onDblClick(e: any) {
    const details = this.el.nativeElement.lastElementChild;
    if (details.style.display === 'none') {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  }
}
