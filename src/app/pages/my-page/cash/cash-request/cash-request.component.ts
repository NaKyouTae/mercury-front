import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/shared/util/forms.service';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cash-request',
  templateUrl: './cash-request.component.html',
  styleUrls: ['./cash-request.component.css'],
})
export class CashRequestComponent implements OnInit {
  public userName: any = this.jwt.getJWTUserKey('user') === undefined ? null : this.jwt.getJWTUserKey('user').userName;
  public prevCash: any;
  public form = new FormGroup({
    userName: new FormControl('', Validators.required),
    withDrawCash: new FormControl('', Validators.required),
  });
  constructor(private common: CommonHttpService, private formservice: FormsService, private jwt: JwtService) { }

  ngOnInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/cashs/users', { username: this.userName }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.prevCash = res.result.prevCash;
      }
    });
  }

  public onRequest(e: any) {
    const data: any = this.formservice.formToData(e);

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
