import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[RowDbclick]',
})
export class RowDbclickDirective {
  @Input() template: any = {};

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('dblclick') public onDblClick(e: any) {
    const details = this.el.nativeElement.lastElementChild;
    if (details.style.display === 'none') {
      // this.renderer.setProperty(details, 'innerHtml', '<div>Hello World</div>');
      // this.renderer.setProperty(details.style, 'display', 'block;');
      details.innerHtml = '<div>Hello World</div>';
      details.style.display = 'block';
    } else {
      // this.renderer.setProperty(details, 'innerHtml', '');
      // this.renderer.setProperty(details.style, 'display', 'none;');
      details.innerHtml = '';
      details.style.display = 'none';
    }
  }
}
