import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/common/forms/forms.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { ModalService } from 'src/app/shared/ui/modal/modal.service';
import { CustomAlertService } from 'src/app/shared/ui/alert/custom-alert.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent implements OnInit {
  public data: any;
  public fields: any = [
    { title: '제목', width: 80, field: 'title', type: 'string' },
    { title: '작성 일', width: 20, field: 'insertDate', type: 'date' },
  ];
  public userRoles: any = this.jwt.getJWTUserKey('roles') === null ? [] : this.jwt.getJWTUserKey('roles');
  public form = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }),
    title: new FormControl('', Validators.required),
    type: new FormControl({ value: false }, Validators.required),
    content: new FormControl('', Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }),
  });

  constructor(private common: CommonHttpService, private formservice: FormsService, private jwt: JwtService, private modal: ModalService, private alertService: CustomAlertService) {}

  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/notices').subscribe((res: any) => {
      this.data = res.result;
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose() {
    this.modal.onCloseAll();
    this.form.reset({
      content: '',
    });
  }

  public onCreate(e: any) {
    const data = this.formservice.formToData(e);
    this.common.httpCallPost('service/notices', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.search();
        this.form.reset({
          content: '',
        });
      }
    });
  }

  public onUpdate(e: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallPut('service/notices', data).subscribe((res: any) => {
      this.search();
      this.onClose();
      this.alertService.showAlert('success', res.message);
    });
  }

  public onDelete(e: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallDelete('service/notices', data).subscribe((res: any) => {
      this.search();
      this.onClose();
      this.alertService.showAlert('success', res.message);
    });
  }
}
