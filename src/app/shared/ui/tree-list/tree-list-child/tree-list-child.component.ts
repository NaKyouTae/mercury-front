import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'nkt-tree-list-child',
  templateUrl: './tree-list-child.component.html',
  styleUrls: ['./tree-list-child.component.css']
})
export class TreeListChildComponent implements OnInit {
  @Input() public datas: any;

  @Input() public onExpand?: EventEmitter;
  @Input() public onCollapse?: EventEmitter;
  @Input() public onData?: EventEmitter;

  public fields: any;
  public collapse: any;
  constructor() {
    if (this.datas !== undefined) {
      this.fields = Object.keys(this.datas[0]);
    }
  }

  ngOnInit() { }
}
