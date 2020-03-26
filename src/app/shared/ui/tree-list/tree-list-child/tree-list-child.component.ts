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

  constructor(private common: CommonHttpService) { }

  ngOnInit() { }

  onFields(data: any) {

    const fields = Object.keys(data);

    fields.forEach(item => {
      if (item === 'children') {
        fields.splice(fields.indexOf(item), 1);
      }
    });

    return fields;
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
      children = res.result;
      data[data.indexOf(e)].children = children;
    });
  }

  onCollapse(data: any) {
    delete data.children;
  }

  onClose(e: any) {
    e.style.display = 'none';
  }

}
