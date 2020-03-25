import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'nkt-tree-list-child',
  templateUrl: './tree-list-child.component.html',
  styleUrls: ['./tree-list-child.component.css']
})
export class TreeListChildComponent implements OnInit {
  @Input() public data: any;

  @Input() public onExpand?: EventEmitter;
  @Input() public onCollapse?: EventEmitter;

  public fields: any;
  public collapse: any;
  constructor() {
    if (this.data !== undefined) {
      this.fields = Object.keys(this.data[0]);
    }
  }

  ngOnInit() {}

  onData(data, field) {
    // tslint:disable-next-line: no-eval
    return eval('data.' + field);
  }
}
