import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-cash-history',
  templateUrl: './cash-history.component.html',
  styleUrls: ['./cash-history.component.css']
})
export class CashHistoryComponent implements OnInit {
  public user: any = this.jwt.getJWTUserKey('user') === undefined ? null : this.jwt.getJWTUserKey('user');
  public data: any;
  public fields: any = [
    { title: '요청 자', width: 15, field: 'userName' },
    { title: '지급 일', width: 15, field: 'paymentDate' },
    { title: '지급 내용', width: 60, field: 'content' },
    { title: '잔액', width: 10, field: 'afterCash' },
  ];

  constructor(private common: CommonHttpService, private jwt: JwtService) { }

  ngOnInit() {
    this.onInit();
  }

  public onInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/cashs/users', { username: this.user.username }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
      }
    });
  }

}
