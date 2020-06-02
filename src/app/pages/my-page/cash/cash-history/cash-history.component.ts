import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-cash-history',
  templateUrl: './cash-history.component.html',
  styleUrls: ['./cash-history.component.css'],
})
export class CashHistoryComponent implements OnInit {
  public data: any;
  public user: any = this.jwt.getJWTAccessKey('user');
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
}
