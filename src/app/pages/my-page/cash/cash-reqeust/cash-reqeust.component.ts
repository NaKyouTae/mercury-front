import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { CashObservableService } from 'src/app/shared/common/observable/cash/cash-observable.service';

@Component({
  selector: 'app-cash-reqeust',
  templateUrl: './cash-reqeust.component.html',
  styleUrls: ['./cash-reqeust.component.css'],
})
export class CashReqeustComponent implements OnInit {
  public user: any = this.jwt.getJWTUserKey('user') === undefined ? null : this.jwt.getJWTUserKey('user');
  public data: any;
  public fields: any = [
    { title: '승인 여부', width: 10, field: 'approval', type: 'boolean' },
    { title: '요청 금액', width: 10, field: 'withDrawCash', type: 'number' },
    { title: '이전 금액', width: 10, field: 'prevCash', type: 'number' },
    { title: '지급 일', width: 15, field: 'paymentDate', type: 'date' },
    { title: '요청 일자', width: 15, field: 'withDrawDate', type: 'date' },
    { title: '은행 명', width: 15, field: 'bank', type: 'string' },
    { title: '계좌 번호', width: 15, field: 'account', type: 'string' },
    { title: '사용자 명', width: 10, field: 'userName', type: 'string' },
  ];

  constructor(private common: CommonHttpService, private jwt: JwtService, private cashObservable: CashObservableService) {
    this.cashObservable.sourceObv.subscribe((res: any) => {
      this.onInit();
    });
  }

  ngOnInit() {
    this.onInit();
  }

  public onInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/cashrequest/users', { username: this.user.username }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
      }
    });
  }
}
