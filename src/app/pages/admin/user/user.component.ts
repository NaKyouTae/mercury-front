import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/util/forms.service';
import { ModalService } from 'src/app/shared/ui/modal/modal.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public data: any;
  public roleData: any;
  public fields: any = [
    { title: '일렬 번호', width: 10, field: 'idx' },
    { title: '사용자 명', width: 30, field: 'username' },
    { title: '이메일', width: 30, field: 'email' },
    { title: '비밀 번호', width: 10, field: 'password' },
    { title: '생성 일자', width: 10, field: 'insertDate' },
    { title: '수정 일자', width: 10, field: 'changeDate' },
  ];
  public newform = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    roleIdx: new FormControl(Validators.required),
    roleTitle: new FormControl(Validators.required),
    password: new FormControl('', Validators.required),
    rep: new FormControl('', Validators.required),
  });
  public form = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    roleIdx: new FormControl(Validators.required),
    roleTitle: new FormControl(Validators.required),
    password: new FormControl('', Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }),
    changeDate: new FormControl({ value: '', disabled: true }),
  });
  constructor(private common: CommonHttpService, private formservice: FormsService, private modal: ModalService) { }

  ngOnInit() {
    this.search();
    this.roleSearch();
  }

  public search() {
    this.common.httpCallGet('service/users').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;

        this.data.forEach((user) => {
          this.common.httpCallGet('service/users/role/' + user.username).subscribe((res: any) => {
            user.roleIdx = res.result[0].roleIdx;
            user.roleTitle = res.result[0].roleName;
          });
        });
      }
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose() {
    this.modal.onCloseAll();

    this.form.reset(this.formservice.initialForm(this.form));
    this.newform.reset(this.formservice.initialForm(this.newform));
  }

  public onCreate(e: any) {
    const data = this.formservice.formToData(e);

    this.common.httpCallPost('user/signup', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.search();
      }
    });
  }

  public onUpdate(e: any) {
    const user: any = this.formservice.formToData(e);
    const role: any = {
      roleIdx: user.roleIdx,
      roleName: user.roleTitle,
    };

    delete user.roleIdx;
    delete user.roleTitle;

    this.common.httpCallPut('service/users/' + user.idx, { user, role }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.search();
      }
    });
  }

  public onDelete(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallDelete('service/users/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.search();
      }
    });
  }

  public roleSearch() {
    this.common.httpCallGet('service/roles').subscribe((res: any) => {
      this.roleData = res.result;
    });
  }

  public roleChange(e: any) {
    this.form.controls.roleTitle.setValue(e.options[e.options.selectedIndex].label);
    this.newform.controls.roleTitle.setValue(e.options[e.options.selectedIndex].label);
  }
}
