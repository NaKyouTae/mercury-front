import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/common/forms/forms.service';
import { ModalService } from '../../modal/modal.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nkt-tree-list-child',
  templateUrl: './tree-list-child.component.html',
  styleUrls: ['./tree-list-child.component.css'],
})
export class TreeListChildComponent implements OnInit {
  @Input() public data: any;
  @Input() public type: any;
  @Input() public fields: any;

  public rowData: any;
  public child: any;
  public roleData: any;
  public form = new FormGroup({
    title: new FormControl(Validators.required),
    menuGroup: new FormControl(Validators.required),
    url: new FormControl(Validators.required),
    menuOrder: new FormControl(Validators.required),
    level: new FormControl({ value: null, disabled: true }),
    child: new FormControl({ value: null, disabled: true }),
    insertDate: new FormControl({ value: null, disabled: true }),
    idx: new FormControl({ value: null, disabled: true }),
    parent: new FormControl({ value: null, disabled: true }),
    roleIdx: new FormControl(Validators.required),
    roleTitle: new FormControl(Validators.required),
  });

  constructor(private common: CommonHttpService, private forms: FormsService, private dialog: ModalService) {}

  ngOnInit() {
    this.roleSearch();
  }

  public onData(data, field) {
    // tslint:disable-next-line: no-eval
    return eval('data.' + field);
  }

  public onExpand(e: any) {
    let children = new Array();
    const data = this.data;
    const params = {
      pidx: e === null || e === undefined ? null : e.idx,
    };
    this.common.httpCallGet('service/' + this.type + '/levels', params).subscribe((res: any) => {
      children = res.result;
      data[data.indexOf(e)].children = children;
    });
  }

  public onCollapse(data: any) {
    data.children.forEach((item) => {
      document.querySelector('#' + item.menuGroup + '_treelist').remove();
    });
    delete data.children;
  }

  public onClose() {
    this.dialog.onCloseAll();
  }

  public onUpdate(data: any) {
    const params: any = this.forms.formToData(data);

    this.common.httpCallPut('service/' + this.type + '/' + params.idx, params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.resetChildLevel(params.parent);
      }
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onCreate(data: any) {
    const params: any = this.forms.formToData(data);

    this.common.httpCallPost('service/' + this.type, params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.resetMyLevel(params);
      }
    });
  }

  public onCreateModal(data: any, temp: any) {
    this.roleSearch();
    this.form.patchValue({
      title: null,
      menuGroup: null,
      url: '/',
      menuOrder: null,
      level: data === null ? 0 : data.level + 1,
      child: false,
      insertDate: null,
      parent: data === null ? null : data.idx,
      roleIdx: null,
      roleTitle: null,
    });

    this.dialog.onOpen({ temp, width: 500, height: 500, data: this.form });
  }

  public onDelete(data: any) {
    const params: any = this.forms.formToData(data);

    this.common.httpCallDelete('service/' + this.type + '/' + params.idx, params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.resetChildLevel(params.parent);
      }
    });
  }

  public resetMyLevel(e: any) {
    let children = new Array();
    const data = this.data;

    this.common.httpCallGet('service/' + this.type + '/levels', { pidx: e.parent }).subscribe((res: any) => {
      data.forEach((menu) => {
        if (menu.idx === e.parent) {
          children = res.result;
          menu.children = children;
        }
      });
    });
  }

  public resetChildLevel(pidx: any) {
    this.common.httpCallGet('service/' + this.type + '/levels', { pidx }).subscribe((newRes: any) => {
      this.data = newRes.result;
    });
  }

  public roleSearch() {
    this.common.httpCallGet('service/roles').subscribe((res: any) => {
      this.roleData = res.result;
    });
  }

  public roleChange(e: any) {
    this.form.controls.roleTitle.setValue(e.roleName);
    this.form.controls.roleIdx.setValue(e.idx);
  }
}
