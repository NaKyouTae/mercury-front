import { Component, OnInit, TemplateRef, HostListener } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { MatDialog } from '@angular/material/dialog';
import { MileageObservableService } from 'src/app/shared/common/observable/mileage/mileage-observable.service';
import { AlertComponent } from 'src/app/shared/ui/alert/alert.component';

@Component({
  selector: 'app-mileage',
  templateUrl: './mileage.component.html',
  styleUrls: ['./mileage.component.css'],
})
export class MileageComponent implements OnInit {
  public user: any = this.jwt.getJWTUserKey('user') === undefined ? null : this.jwt.getJWTUserKey('user');
  public prevMileage: any;
  public form = new FormGroup({
    userName: new FormControl(''),
    bank: new FormControl('', Validators.required),
    account: new FormControl('', Validators.required),
    withDrawMileage: new FormControl('', Validators.required),
  });

  public banks: any;
  public checkWithDraw = false;
  public checkPrevMileage: any = 0;

  // tslint:disable-next-line: max-line-length
  constructor(
    private common: CommonHttpService,
    private formservice: FormsService,
    private jwt: JwtService,
    private dialog: MatDialog,
    private mileageObservable: MileageObservableService,
    private alertService: AlertComponent) { }

  ngOnInit() {
    this.onInit();
  }

  public onInit() {
    this.onSearchUser();
  }

  public onSearchUser() {
    this.common.httpCallGet('service/users/idx', { idx: this.user.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.prevMileage = res.result.mileage;
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
    data.withDrawMileage = this.prevMileage;

    if (data.withDrawMileage < 10000) {
      this.alertService.showAlert('warning', '10,000만원 이상 출금이 가능합니다.');
      return false;
    } else {
      this.common.httpCallPost('service/mileagerequest', data).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          this.alertService.showAlert('success', res.message);
          this.onInit();
          this.dialog.closeAll();
          this.mileageObservable.successRequest();
        }
      });
    }
  }

  public openModal(template: TemplateRef<any>) {
    // 출금 팝업 오픈시 은행 목록 조회
    this.seSystemConfig();
    this.checkPrevMileage = this.prevMileage;

    this.dialog.open(template, {
      width: '400px',
      height: '600px',
    });
  }

  public selectChange(e: any) {
    this.form.controls.bank.setValue(e.options[e.options.selectedIndex].value);
  }

  public withDrawMileageInput(e: any) {
    const nowMileage = Number(e.target.value);
    // 보유하고 있는 마일리지 보다 높은 금액을 입력하면
    // 보유하고 있는 마일리지 최대치로 세팅
    if (nowMileage > this.checkPrevMileage) {
      e.target.value = this.checkPrevMileage;
    }
  }

  public withDrawMileageChange(e: any) {
    this.checkPrevMileage = this.checkPrevMileage - Number(e.target.value);
  }
}
