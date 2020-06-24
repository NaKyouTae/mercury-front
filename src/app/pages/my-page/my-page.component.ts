import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/util/forms.service';
import { Store } from '@ngrx/store';
import { NewsLetterState } from 'src/app/core/store/common/common.model';
import { inCommonNewsletter } from 'src/app/core/store/common/common.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ObservableService } from 'src/app/shared/common/observable/observable.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
})
export class MyPageComponent implements OnInit {
  public userRoles: any = this.jwt.getJWTAccessKey('roles') === null ? [] : this.jwt.getJWTAccessKey('roles');
  public userGrade: any = this.jwt.getJWTAccessKey('grade') === null ? [] : this.jwt.getJWTAccessKey('grade');
  public user: any = this.jwt.getJWTAccessKey('user') === null ? [] : this.jwt.getJWTAccessKey('user');

  public routeLinks: any;
  public threeTot: any = 0;
  public twoTot: any = 0;
  public total: any = 0;
  public mileage: any = 0;
  public subCheck: any = false;

  public grades: any;
  public gradeView: any = false;

  public form = new FormGroup({
    idx: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }),
  });

  constructor(private common: CommonHttpService, private jwt: JwtService, private formservice: FormsService, private observable: ObservableService) {}

  ngOnInit() {
    this.search();

    // newsletters check 여부
    this.observable.sourceObv.subscribe((res: any) => {
      this.subCheck = res;
    });
  }

  public search() {
    this.common.httpCallGet('service/three/' + this.user.idx, { userIdx: this.user.idx }).subscribe((res: any) => {
      this.threeTot = res.result.length;
    });

    this.common.httpCallGet('service/twice/' + this.user.idx, { userIdx: this.user.idx }).subscribe((res: any) => {
      this.twoTot = res.result.length;
    });

    this.common.httpCallGet('service/loves/totals', { userIdx: this.user.idx }).subscribe((res: any) => {
      this.total = res.result;
    });

    this.common.httpCallGet('service/users/' + this.user.username, { username: this.user.username }).subscribe((res: any) => {
      this.user = res.result;
      this.mileage = res.result.mileage;
    });

    this.common.httpCallGet('service/newsletters/users/idxs', { userIdx: this.user.idx }).subscribe((res: any) => {
      if (res.result !== null) {
        this.subCheck = true;
      }
    });

    this.common.httpCallGet('service/grades').subscribe((res: any) => {
      this.grades = res.result;
    });
  }

  public onClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose(template: any) {
    template.style.display = 'none';
  }

  public onUpdate(e: any, template: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('service/users', { user: data }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        this.user = res.result;
      }
    });
  }

  public onDelete(e: any, template: any) {
    if (window.confirm('삭제 하시겠습니까?')) {
      const data: any = this.formservice.formToData(e);

      this.common.httpCallDelete('service/users/' + data.idx, { user: data }).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          template.style.display = 'none';
          this.user = this.jwt.getJWTAccessKey('user');
        }
      });
    } else {
      return false;
    }
  }

  // Store 적용 후
  // 구독 해제 시  State를 이용한 뉴스레터 구독하기 버튼 활성화 및 비활성화 기능 필요
  // ================================================================================= [구독하기 해제 기능]
  public onUnSubscribe() {
    if (window.confirm('구독을 해제하시겠습니까?')) {
      this.common.httpCallDelete('service/newsletters', this.user.username).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          alert('구독 해제하였습니다.');
          this.observable.checkNewsLetter(true);
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
