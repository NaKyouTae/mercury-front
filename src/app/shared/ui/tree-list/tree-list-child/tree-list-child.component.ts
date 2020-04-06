import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService, CustomEncoder } from 'src/app/shared/common/common-http.service';
import { EventEmitter } from 'protractor';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'nkt-tree-list-child',
  templateUrl: './tree-list-child.component.html',
  styleUrls: ['./tree-list-child.component.css']
})
export class TreeListChildComponent implements OnInit {
  @Input() public data: any;

  public rowData: any;
  public child: any;

  public form = new FormGroup({
    title: new FormControl(),
    menugroup: new FormControl(),
    url: new FormControl(),
    menuorder: new FormControl(),
    level: new FormControl(),
    child: new FormControl(),
    insertdate: new FormControl(),
    idx: new FormControl(),
    parent: new FormControl()
  });

  constructor(private common: CommonHttpService) {}

  ngOnInit() {}

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
      this.child = children;
    });
  }

  onCollapse(data: any) {
    data.children.forEach(item => {
      document.querySelector('#' + item.menugroup + '_treelist').remove();
    });
    delete data.children;
  }

  onClose(e: any) {
    e.style.display = 'none';
  }
  onUpdate(data: any) {
    const param = new HttpParams({ encoder: new CustomEncoder() }).append('menu', data);

    this.common.httpCallPut('service/menu/menus/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        const modal = document.querySelector('.modal') as HTMLElement;
        modal.style.display = 'none';

        this.common.httpCallGet('service/menu/levels', { pidx: 'null' }).subscribe((newRes: any) => {
          this.data = newRes.result;
        });
      }
    });
  }

  onDblClick(data: any) {
    this.form.controls.title.setValue(data.title);
    this.form.controls.menugroup.setValue(data.menugroup);
    this.form.controls.url.setValue(data.url);
    this.form.controls.menuorder.setValue(data.menuorder);
    this.form.controls.level.setValue(data.level);
    this.form.controls.child.setValue(data.child);
    this.form.controls.insertdate.setValue(data.insertdate);
    this.form.controls.idx.setValue(data.idx);
    this.form.controls.parent.setValue(data.parent);
  }

  onCreate(data: any, temp: any) {
    temp.style.display = 'block';

    this.form.controls.title.setValue(null);
    this.form.controls.menugroup.setValue(null);
    this.form.controls.url.setValue(data.url);
    this.form.controls.menuorder.setValue(null);
    this.form.controls.level.setValue(data.level + 1);
    this.form.controls.child.setValue(data.child);
    this.form.controls.insertdate.setValue(null);
    this.form.controls.idx.setValue(null);
    this.form.controls.parent.setValue(data.idx);
  }
}
