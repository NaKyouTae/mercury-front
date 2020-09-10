import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll-select',
  templateUrl: './infinite-scroll-select.component.html',
  styleUrls: ['./infinite-scroll-select.component.css']
})
export class InfiniteScrollSelectComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('data') public data: any;
  @Output('change') public clickEvent: EventEmitter<any> = new EventEmitter<any>();


  public title: any = 1;
  constructor() { }

  ngOnInit() {
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

  public clickValue(e: any) {
    const parent = e.target.parentElement;
    this.title = e.target.innerText;
    parent.style.display = 'none';

    this.clickEvent.emit(e);
  }

}
