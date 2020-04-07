import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService, CustomEncoder } from 'src/app/shared/common/common-http.service';
import { EventEmitter } from 'protractor';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/util/forms.service';

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
    title: new FormControl(''),
    menugroup: new FormControl(''),
    url: new FormControl(''),
    menuorder: new FormControl(''),
    level: new FormControl(''),
    child: new FormControl(''),
    insertdate: new FormControl(''),
    idx: new FormControl(''),
    parent: new FormControl('')
  });

  constructor(private common: CommonHttpService, private forms: FormsService) {}

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
  onUpdate(data: any, template: any) {
    const params: any = this.forms.formToData(data);

    this.common.httpCallPut('service/menu/menus/' + params.idx, params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        // this.selectAll();
      }
    });
  }

  onDblClick(data: any) {
    this.form.patchValue({
      title: data.title,
      menugroup: data.menugroup,
      url: data.url,
      menuorder: data.menuorder,
      level: data.level,
      child: data.child,
      insertdate: data.insertdate,
      idx: data.idx,
      parent: data.parent
    });
  }

  onCreate(data: any, template: any) {
    const params = this.forms.formToData(data);

    this.common.httpCallPost('service/menu/menus', params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        // this.selectAll();
      }
    });
  }

  onCreateModal(data: any, temp: any) {
    temp.style.display = 'block';

    this.form.patchValue({
      title: null,
      menugroup: null,
      url: '/',
      menuorder: null,
      level: data.level + 1,
      child: false,
      insertdate: null,
      parent: data.idx
    });
  }

  onDelete(data: any, template: any) {
    const params: any = this.forms.formToData(data);

    this.common.httpCallDelete('service/menu/menus/' + params.idx, params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        // this.selectAll();
      }
    });
  }

  // selectAll() {
  //   this.common.httpCallGet('service/menu/levels', { pidx: 'null' }).subscribe((newRes: any) => {
  //     this.data = newRes.result;
  //   });
  // }
}
