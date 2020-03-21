import { Component, OnInit, Input } from '@angular/core';

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

      this.getChildren(this.data);
    }
  }

  onBind(e: any) {
    const result = new Array();

    for (const d of this.data) {
      Object.keys(d).forEach(v => {
        if (e === v) {
          result.push(d[v]);
        }
      });
    }

    return result;
  }

  getChildren(data: any) {
    if (Array.isArray(data)) {
      data.forEach(item => {
        if (item.child === true) {
          this.getChildren(item.children);
        }

        this.data.push(item);
      });
    } else {
      this.data.push(data);
    }
  }
}
