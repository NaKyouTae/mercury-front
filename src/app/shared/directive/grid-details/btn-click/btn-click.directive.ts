import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[BtnClick]'
})
export class BtnClickDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') public onClick() {
    const details = this.el.nativeElement.parentElement.parentElement.lastElementChild;
    const btn = this.el.nativeElement;
    if (details.style.display === 'none') {
      btn.innerHTML = '^';
      details.style.display = 'block';
      // details.animate([
      //   { transform: 'translateY(*)' },
      // ], {
      //   duration: 3000,
      // });

    } else {
      btn.innerHTML = '&#62;';
      details.style.display = 'none';
      // details.animate([
      //   { transform: 'translateY(0px)' },
      // ], {
      //   duration: 3000,
      // });
    }
  }
}
