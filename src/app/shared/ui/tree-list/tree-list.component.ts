import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from '../../util/forms.service';
import { CommonHttpService } from '../../common/http/common-http.service';
import { ModalService } from '../modal/modal.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nkt-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css'],
})
export class CustomTreeListComponent implements OnInit {
  @Input() public data: any;
  @Input() public type: any;

  public fields: any = [
    { title: '일렬 번호', width: 10, field: 'idx' },
    { title: '메뉴 명', width: 10, field: 'title ' },
    { title: '메뉴 그룹', width: 10, field: 'menuGroup ' },
    { title: 'URL', width: 10, field: 'url ' },
    { title: '메뉴 순서', width: 5, field: 'menuOrder ' },
    { title: 'Level', width: 5, field: 'level ' },
    { title: '하위 여부', width: 10, field: 'child ' },
    { title: '생성 일자', width: 10, field: 'insertDate ' },
    { title: '부모 일렬 번호', width: 10, field: 'parent ' },
    { title: '권한 일렬 번호', width: 10, field: 'roleIdx ' },
    { title: '권한 명', width: 10, field: 'roleTitle ' },
  ];
  public roleData: any;

  public form = new FormGroup({
    title: new FormControl(Validators.required),
    menuGroup: new FormControl(Validators.required),
    url: new FormControl(Validators.required),
    menuOrder: new FormControl(Validators.required),
    level: new FormControl(Validators.required),
    roleIdx: new FormControl(Validators.required),
    roleTitle: new FormControl(Validators.required),
  });

  constructor(private common: CommonHttpService, private forms: FormsService, private dialog: ModalService) {}

  ngOnInit() {}

  public onCreateModal(temp: any) {
    this.form.patchValue({
      title: null,
      menuGroup: null,
      url: this.type === 'menus' ? '/' : '/my/',
      menuOrder: null,
      level: 1,
      child: 0,
      insertDate: null,
      parent: null,
      roleIdx: null,
      roleTitle: null,
    });
    this.roleSearch();
    this.dialog.onOpen({ temp, width: 500, height: 460, data: this.form });
  }

  public onCreate(data: any) {
    const params: any = this.forms.formToData(data);

    this.common.httpCallPost('service/' + this.type, params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.onSearch(params);
      }
    });
  }

  public onSearch(e: any) {
    this.common.httpCallGet('service/' + this.type + '/levels', { pidx: null }).subscribe((res: any) => {
      this.data = res.result;
    });
  }

  public onClose() {
    this.dialog.onCloseAll();
  }

  public roleSearch() {
    this.common.httpCallGet('service/roles').subscribe((res: any) => {
      this.roleData = res.result;
    });
  }

  public roleChange(e: any) {
    this.form.controls.roleTitle.setValue(e.options[e.options.selectedIndex].label);
    this.form.controls.roleIdx.setValue(e.options[e.options.selectedIndex].value);
  }
}
