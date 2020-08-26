import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css'],
})
export class CashComponent implements OnInit {
  public user: any = this.jwt.getJWTUserKey('user');
  public userName: any = this.jwt.getJWTUserKey('user') === undefined ? null : this.jwt.getJWTUserKey('user').username;
  public prevCash: any = this.jwt.getJWTUserKey('user') === undefined ? null : this.jwt.getJWTUserKey('user').mileage;
  public form = new FormGroup({
    userName: new FormControl('', Validators.required),
    bank: new FormControl('', Validators.required),
    account: new FormControl('', Validators.required),
    withDrawCash: new FormControl('', Validators.required),
  });

  public data: any;
  public fields: any = [
    { title: '요청 자', width: 15, field: 'userName' },
    { title: '지급 일', width: 15, field: 'paymentDate' },
    { title: '지급 내용', width: 60, field: 'content' },
    { title: '잔액', width: 10, field: 'afterCash' },
  ];

  public banks: any;
  public checkWithDraw = false;
  public checkPrevCash: any = 0;

  constructor(private common: CommonHttpService, private formservice: FormsService, private jwt: JwtService, private dialog: MatDialog) { }

  ngOnInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/cashs/users', { username: this.user.username }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
      }
    });
  }

  public seSystemConfig() {
    this.common.httpCallGet('service/system/config/type', { type: 'BANK' }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.banks = res.result;
      }
    });
  }

  public onRequest(e: any) {
    const data: any = this.formservice.formToData(e);

    data.userName = this.userName;
    data.withDrawCash = this.prevCash;

    if (data.withDrawCash < 10000) {
      alert('10,000만원 이상 출금이 가능합니다.');
      return false;
    } else {
      this.common.httpCallPost('service/cashrequest', data).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          alert(res.message);
        }
      });
    }
  }

  public openModal(template: TemplateRef<any>) {
    // 출금 팝업 오픈시 은행 목록 조회
    this.seSystemConfig();
    this.checkPrevCash = this.prevCash;
    this.dialog.open(template, {
      width: '400px',
      height: '600px',
    });
  }
  public selectChange(e: any) {
    this.form.controls.jobIdx.setValue(e.options[e.options.selectedIndex].value);
  }
}
