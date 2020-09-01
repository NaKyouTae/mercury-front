import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-mileage-history',
  templateUrl: './mileage-history.component.html',
  styleUrls: ['./mileage-history.component.css'],
})
export class MileageHistoryComponent implements OnInit {
  public user: any = this.jwt.getJWTUserKey('user') === undefined ? null : this.jwt.getJWTUserKey('user');
  public data: any;
  public fields: any = [
    { title: '지급 일', width: 20, field: 'paymentDate', type: 'date' },
    { title: '지급 내용', width: 60, field: 'content', type: 'string' },
    { title: '잔액', width: 10, field: 'afterMileage', type: 'number' },
    { title: '사용자 명', width: 10, field: 'userName', type: 'string' },
  ];

  constructor(private common: CommonHttpService, private jwt: JwtService) { }

  ngOnInit() {
    this.onInit();
  }

  public onInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/mileages/users', { username: this.user.username }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
      }
    });
  }
}
