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
  public user: any = this.jwt.getJWTUserKey('user') === undefined ? null : this.jwt.getJWTUserKey('user');
  public prevCash: any;
  public form = new FormGroup({
    userName: new FormControl(''),
    bank: new FormControl('', Validators.required),
    account: new FormControl('', Validators.required),
    withDrawCash: new FormControl('', Validators.required),
  });

  public banks: any;
  public checkWithDraw = false;
  public checkPrevCash: any = 0;

  constructor(private common: CommonHttpService, private formservice: FormsService, private jwt: JwtService, private dialog: MatDialog) { }

  ngOnInit() {
    this.onInit();
  }


  public onInit() {
    this.onSearchUser();
  }

  public onSearchUser() {
    this.common.httpCallGet('service/users/idx', { idx: this.user.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.prevCash = res.result.mileage;
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

    data.userName = this.user.username;
    data.withDrawCash = this.prevCash;

    if (data.withDrawCash < 10000) {
      alert('10,000만원 이상 출금이 가능합니다.');
      return false;
    } else {
      this.common.httpCallPost('service/cashrequest', data).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          alert(res.message);
          this.onInit();
          this.dialog.closeAll();
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
    this.form.controls.bank.setValue(e.options[e.options.selectedIndex].value);
  }
}
