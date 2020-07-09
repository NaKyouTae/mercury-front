import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

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
    withDrawCash: new FormControl('', Validators.required),
  });

  public data: any;
  public fields: any = [
    { title: '요청 자', width: 15, field: 'userName' },
    { title: '요청 일자', width: 15, field: 'withDrawDate' },
    { title: '지급 일', width: 15, field: 'paymentDate' },
    { title: '지급 내용', width: 20, field: 'content' },
    { title: '이전 금액', width: 10, field: 'prevCash' },
    { title: '요청 금액', width: 10, field: 'withDrawCash' },
    { title: '잔액', width: 10, field: 'afterCash' },
    { title: '승인', width: 5, field: 'approval' },
  ];

  constructor(private common: CommonHttpService, private formservice: FormsService, private jwt: JwtService) {}

  ngOnInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/cashs/users', { username: this.user.username }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.data = res.result;
      }
    });
  }

  public onCancle(e: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallDelete('service/cashs/' + data.idx, data).subscribe((res: any) => {
      this.data = res.result;
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
      this.common.httpCallPost('service/cashs', data).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          alert(res.message);
        }
      });
    }
  }
}
