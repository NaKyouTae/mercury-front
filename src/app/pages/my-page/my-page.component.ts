import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/util/forms.service';
import { ObservableService } from 'src/app/shared/common/observable/observable.service';
import { ModalService } from 'src/app/shared/ui/modal/modal.service';
import { MileageObservableService } from 'src/app/shared/common/observable/mileage/mileage-observable.service';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';
import { Router } from '@angular/router';
import { CustomAlertService } from 'src/app/shared/ui/alert/custom-alert.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
})
export class MyPageComponent implements OnInit {
  public userRoles: any = this.jwt.getJWTUserKey('roles') === null ? [] : this.jwt.getJWTUserKey('roles');
  public userGrade: any = this.jwt.getJWTUserKey('grade') === null ? [] : this.jwt.getJWTUserKey('grade');
  public user: any = this.jwt.getJWTUserKey('user') === null ? [] : this.jwt.getJWTUserKey('user');

  public routeLinks: any;
  public threeTot: any = 0;
  public twoTot: any = 0;
  public total: any = 0;
  public mileage: any = 0;
  public subCheck: any = false;

  public grades: any;
  public gradeView: any = false;

  public pwCheck: any = false;
  public failedPW: any = false;

  public gradeRange: any;

  public form = new FormGroup({
    idx: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    rep: new FormControl('', Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }),
  });

  constructor(
    private common: CommonHttpService,
    private jwt: JwtService,
    private formservice: FormsService,
    private observable: ObservableService,
    private mileageObservable: MileageObservableService,
    private modal: ModalService,
    private cookie: CookieService,
    private router: Router,
    private alertService: CustomAlertService
  ) {}

  ngOnInit() {
    this.onInit();

    // newsletters check 여부
    this.observable.sourceObv.subscribe((res: any) => {
      if (res === 'Delete') {
        this.onInit();
      } else if (res === 'Newsletter') {
        this.subCheck = res;
      }
    });

    this.mileageObservable.sourceObv.subscribe((res: any) => {
      this.onSearchUser();
    });
  }

  public onInit() {
    this.common.httpCallGet('service/three/user', { userIdx: this.user.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.threeTot = res.result.length;
      }
    });

    this.common.httpCallGet('service/twice/user', { userIdx: this.user.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.twoTot = res.result.length;
      }
    });

    this.common.httpCallGet('service/loves/totals', { userIdx: this.user.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.total = res.result;
      }
    });

    this.onSearchUser();

    this.common.httpCallGet('service/newsletters/users/idxs', { userIdx: this.user.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.subCheck = true;
      }
    });

    this.onSearchGrade();
  }

  public onSearchGrade() {
    const myGrade = this.userGrade;

    this.common.httpCallGet('service/grades').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.grades = res.result;
        this.gradeRange = res.result.filter((grade) => grade.idx === myGrade.gradeIdx)[0];
      }
    });
  }

  public onSearchUser() {
    this.common.httpCallGet('service/users/' + this.user.username, { username: this.user.username }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.user = res.result;
        this.mileage = res.result.mileage;
      }
    });
  }

  public onClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose() {
    this.modal.onCloseAll();
  }

  public onUpdate(e: any) {
    const data: any = this.formservice.formToData(e);
    data.idx = this.user.idx;
    // 비밀번호 확인 데이터는 화면단에서 새로운 비밀번호를 확인하기 위함
    delete data.rep;

    this.common.httpCallPut('service/users/' + data.idx, { user: data }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.onClose();
        this.user = res.result;
      } else {
        this.failedPW = true;
      }
    });
  }

  public onDefaultUserDelete(e: any) {
    if (window.confirm('탈퇴 하시겠습니까?')) {
      const data: any = this.formservice.formToData(e);
      delete data.rep;
      this.common.httpCallDelete('service/users/' + data.idx, { user: data }).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          this.onClose();
          this.router.navigateByUrl('/three');
          window.location.reload();
        }
      });
    } else {
      return false;
    }
  }

  public onKakaoUserDelete(e: any) {
    if (window.confirm('탈퇴 하시겠습니까?')) {
      const data: any = this.formservice.formToData(e);
      delete data.rep;
      this.common.httpCallDelete('user/kakao/withdrawal', { user: data, access: this.cookie.getCookie('AWT') }).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          this.onClose();
          this.router.navigateByUrl('/three');
          window.location.reload();
        }
      });
    } else {
      return false;
    }
  }

  // Store 적용 후
  // 구독 해제 시 State를 이용한 뉴스레터 구독하기 버튼 활성화 및 비활성화 기능 필요
  // ================================================================================= [구독하기 해제 기능]
  public onUnSubscribe() {
    if (window.confirm('구독을 해제하시겠습니까?')) {
      this.common.httpCallDelete('service/newsletters', this.user.username).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          this.alertService.showAlert('success', res.message);
          this.observable.checkNewsLetter('Newsletter');
          this.subCheck = false;
        }
      });
    } else {
      return false;
    }
  }

  public gradeOver() {
    this.gradeView = !this.gradeView;
  }
}
