import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/common/forms/forms.service';
import { ModalService } from 'src/app/shared/ui/modal/modal.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {
  public data: any;
  public fields: any = [
    { title: '일렬번호', width: 10, field: 'idx', type: 'string' },
    { title: '권한 명', width: 50, field: 'roleName', type: 'string' },
    { title: '생성 일자', width: 20, field: 'insertDate', type: 'date' },
    { title: '수정 일자', width: 20, field: 'changeDate', type: 'date' },
  ];
  public form = new FormGroup({
    idx: new FormControl(''),
    roleName: new FormControl('', Validators.required),
    insertDate: new FormControl(''),
    changeDate: new FormControl(''),
  });

  constructor(private common: CommonHttpService, private formservice: FormsService, private modal: ModalService) {}

  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/roles').subscribe((res: any) => {
      this.data = res.result;
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose() {
    this.modal.onCloseAll();

    this.form.reset({
      idx: '',
      roleName: '',
      insertDate: '',
      changeDate: '',
    });
  }

  public onCreate(e: any) {
    const data = this.formservice.formToData(e);

    this.common.httpCallPost('service/roles', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.search();
      }
    });
  }

  public onUpdate(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('service/roles/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.search();
      }
    });
  }

  public onDelete(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallDelete('service/roles/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.search();
      }
    });
  }
}
