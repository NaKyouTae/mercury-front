import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService } from '../../common/common-http.service';

@Component({
  selector: 'nkt-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class CustomTreeListComponent implements OnInit {
  @Input() public data: any;

  public orderData: Array<any> = new Array();
  public fields: any;
  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    if (this.data !== undefined) {
      this.fields = Object.keys(this.data[0]);
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
  onData(data, field) {
    // tslint:disable-next-line: no-eval
    return eval('data.' + field);
  }

  onExpand(e: any) {
    let children = new Array();
    const data = this.data;
    const params = {
      pidx: e === null || e === undefined ? null : e.idx
    };
    this.common.httpCallGet('service/menu/levels', params).subscribe((res: any) => {
      children = res;
      data[data.indexOf(e)].children = children;
    });
  }

  onCollapse(data: any) {
    delete data.children;
  }
}
