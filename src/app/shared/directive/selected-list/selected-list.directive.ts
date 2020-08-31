import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectedList]',
})
export class SelectedListDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') public onClick(e: any) {
    const parent = this.el.nativeElement.parentElement;
    const me = this.el.nativeElement;
    const children = parent.children;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < children.length; i++) {
      const item = children[i];

      if (me === item) {
        item.style.backgroundColor = 'darkgray';
      } else {
        item.style.backgroundColor = '';
      }
    }
  }
}
