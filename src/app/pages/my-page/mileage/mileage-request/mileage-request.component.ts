import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { MileageObservableService } from 'src/app/shared/common/observable/mileage/mileage-observable.service';

@Component({
  selector: 'app-mileage-request',
  templateUrl: './mileage-request.component.html',
  styleUrls: ['./mileage-request.component.css'],
})
export class MileageRequestComponent implements OnInit {
  public user: any = this.jwt.getJWTUserKey('user') === undefined ? null : this.jwt.getJWTUserKey('user');
  public data: any;
  public fields: any = [
    { title: '승인 여부', width: 10, field: 'approval', type: 'boolean' },
    { title: '요청 금액', width: 10, field: 'withDrawMileage', type: 'number' },
    { title: '이전 금액', width: 10, field: 'prevMileage', type: 'number' },
    { title: '지급 일', width: 15, field: 'paymentDate', type: 'date' },
    { title: '요청 일자', width: 15, field: 'withDrawDate', type: 'date' },
    { title: '은행 명', width: 15, field: 'bank', type: 'string' },
    { title: '계좌 번호', width: 15, field: 'account', type: 'string' },
    { title: '사용자 명', width: 10, field: 'userName', type: 'string' },
  ];

  constructor(private common: CommonHttpService, private jwt: JwtService, private mileageObservable: MileageObservableService) {
    this.mileageObservable.sourceObv.subscribe((res: any) => {
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
    this.common.httpCallGet('service/mileagerequest/users', { username: this.user.username }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
      }
    });
  }
}
