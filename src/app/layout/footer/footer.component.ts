import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { ObservableService } from 'src/app/shared/common/observable/observable.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FormsService } from 'src/app/shared/util/forms.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../header/login/login.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public subCheck: any = true;
  public user: any = this.jwt.getJWTUserKey('user');

  public form = new FormGroup({
    username: new FormControl(),
    email: new FormControl('', Validators.required),
  });

  constructor(
    private common: CommonHttpService,
    private jwt: JwtService,
    private observable: ObservableService,
    private formservice: FormsService,
    private dialog: MatDialog
  ) { }

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
      alert('로그인을 해주세요.');
      // this.onPopOpen(loinTemp);
      return false;
    } else if (this.user.email === null || this.user.email === '') {
      this.onPopOpen(emailTemp);
      return false;
    } else {
      this.upNewsletter();
    }
  }

  public onPopOpen(template: TemplateRef<any>) {
    const dialogData = {
      email: ''
    };

    this.dialog.open(template, {
      width: '400px',
      height: '240px',
      data: dialogData,
    });
  }

  public onPopClose() {
    this.dialog.closeAll();
  }

  public upUserEmail(e: any) {
    const data: any = this.formservice.formToData(e);

    data.username = this.user.username;

    this.common.httpCallPut('service/users/' + this.user.idx, { user: data, role: null }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onPopClose();
        this.upNewsletter();
        this.user = res.result;
      }
    });
  }

  public upNewsletter() {
    const params = {
      userIdx: this.user.idx,
      userName: this.user.username,
      userEMail: this.user.email,
    };

    this.common.httpCallPost('service/newsletters', params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.observable.checkNewsLetter('Newsletter');
        this.subCheck = false;
      }
    });
  }
}
