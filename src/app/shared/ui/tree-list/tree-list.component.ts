import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService } from '../../common/common-http.service';

@Component({
  selector: 'nkt-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class CustomTreeListComponent implements OnInit {
  @Input() public data: any;
  public fields: any;
  constructor() {}

  ngOnInit() {
    if (this.data !== undefined) {
      this.fields = Object.keys(this.data[0]);
      this.fields.forEach(item => {
        if (item === 'children') {
          this.fields.splice(this.fields.indexOf(item), 1);
        }
      });
    }
  }
}
