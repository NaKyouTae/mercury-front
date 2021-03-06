import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { ObservableService } from 'src/app/shared/common/observable/observable.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormsService } from 'src/app/shared/common/forms/forms.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public subCheck: any = true;
  public user: any = this.jwt.getJWTUserKey('user');

  public auth: any = null;
  public authConfirm: any = false;
  public emailConfirm: any = true;

  public form = new FormGroup({
    username: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private common: CommonHttpService, private jwt: JwtService, private observable: ObservableService, private formservice: FormsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.onSearch();

    // newsletters check 여부
    this.observable.sourceObv.subscribe((res: any) => {
      if (res === 'Newsletter') {
        this.subCheck = res;
      }
    });
  }

  public onSearch() {
    const idx = this.user === null ? null : this.user.idx;

    this.common.httpCallGet('service/newsletters/users/idxs', { userIdx: idx }).subscribe((res: any) => {
      if (res.result !== null) {
        this.subCheck = false;
      }
    });
  }

  public onSubscription(emailTemp: TemplateRef<any>, loinTemp: TemplateRef<any>) {
    if (this.user === null) {
      // alert('로그인을 해주세요.');
      this.onPopOpen(loinTemp, '800px', '720px');
      return false;
    } else if (this.user.email === null || this.user.email === '') {
      this.onPopOpen(emailTemp, '400px', '240px');
      return false;
    } else {
      this.upNewsletter(null);
    }
  }

  public onPopOpen(template: TemplateRef<any>, width: any, height: any) {
    const dialogData = {
      email: '',
    };

    this.dialog.open(template, {
      width,
      height,
      data: dialogData,
    });
  }

  public onPopClose() {
    this.dialog.closeAll();
  }

  public checkEmail(email: any) {
    if (email === null) {
      return false;
    } else {
      this.auth = null;
      this.common.httpCallGet('service/mails/check', { target: email }).subscribe((res: any) => {
        if (res.resultCode === 'OK' && res.result !== null) {
          if (res.result === false) {
            this.emailConfirm = res.result;
          } else {
            console.log('auth number : ' + res.result);
            this.auth = res.result;
          }
        }
      });
    }
  }

  public upUserEmail(e: any) {
    const data: any = this.formservice.formToData(e);

    data.username = this.user.username;

    this.common.httpCallPut('service/users/' + this.user.idx, { user: data, role: null }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onPopClose();
        this.upNewsletter(res.result.email);
        this.user = res.result;
      }
    });
  }

  public upNewsletter(email: any) {
    if (confirm('구독 하시겠습니까?')) {
      const params = {
        userIdx: this.user.idx,
        userName: this.user.username,
        userEMail: email === null ? this.user.email : email,
      };

      this.common.httpCallPost('service/newsletters', params).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          this.observable.checkNewsLetter('Newsletter');
          this.subCheck = false;
        }
      });
    } else {
      return false;
    }
  }
}
