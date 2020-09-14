import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll-select',
  templateUrl: './infinite-scroll-select.component.html',
  styleUrls: ['./infinite-scroll-select.component.css'],
})
export class InfiniteScrollSelectComponent implements OnInit, OnChanges {
  // tslint:disable-next-line: no-input-rename
  @Input('data') public data: any;
  // tslint:disable-next-line: no-input-rename
  @Input('field') public field: any;
  // tslint:disable-next-line: no-input-rename
  @Input('value') public value: any;
  // tslint:disable-next-line: no-input-rename
  @Input('width') public width: any;
  // tslint:disable-next-line: no-input-rename
  @Input('selected') public selected?: any;

  @Output('change') public clickEvent: EventEmitter<any> = new EventEmitter<any>();

  public title: any;
  constructor() {}

  ngOnInit() {
    this.onInit();
  }

  ngOnChanges() {
    this.onInit();
  }

  public onInit() {
    if (this.data !== undefined && this.data !== null) {
      if (this.selected !== undefined && this.selected !== null) {
        // tslint:disable-next-line: no-eval
        this.title = eval('this.data.filter((item) => eval("item." + this.value) === this.selected)[0].' + this.field);
      } else {
        // tslint:disable-next-line: no-eval
        this.title = eval('this.data[0].' + this.field);
      }
    }
  }

  public clickTitle(e: any) {
    const detail = e.target.nextSibling;
    const dis = detail.style.display;
    if (dis === 'block') {
      detail.classList.remove('on');
      detail.style.display = 'none';
    } else {
      detail.classList.add('on');
      detail.style.display = 'block';
    }
  }

  public clickValue(data: any, e: any) {
    const parent = e.target.parentElement;
    // tslint:disable-next-line: no-eval
    this.title = eval('data.' + this.field);
    parent.style.display = 'none';

    this.clickEvent.emit(data);
  }
}
