import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/util/forms.service';
import { trigger, style, state, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('dragToggle', [
      state(
        'sign',
        style({
          transform: 'translateX(-100%)',
        })
      ),
      state(
        'login',
        style({
          transform: 'translateX(0%)',
        })
      ),
      state(
        'upSign',
        style({
          transform: 'translateX(0%)',
        })
      ),
      state(
        'upLogin',
        style({
          transform: 'translateX(100%)',
        })
      ),
      transition('* => *', animate('500ms ease-out')),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialog, private formservice: FormsService, private common: CommonHttpService, private router: Router) { }
  public front: any = false;
  public widthToggle: any = this.front ? 'sign' : 'login';
  public upToggle: any = !this.front ? 'upSign' : 'upLogin';

  public username: string;
  public userDupleCheck: any = false;
  public userDupleConfirm: any = false;
  public password: string;

  public auth: any = null;
  public authConfirm: any = false;
  public number: any = null;

  public logInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rep: new FormControl('', Validators.required),
  });

  ngOnInit() { }

  public dragFront() {
    this.front = !this.front;
    this.widthToggle = this.front ? 'sign' : 'login';
    this.upToggle = !this.front ? 'upSign' : 'upLogin';
  }

  public onClick(template: TemplateRef<any>) {
    const dialogData = {
      username: this.username,
      pw: this.password,
    };

    this.front = false;
    this.widthToggle = 'login';

    this.dialog.open(template, {
      width: '800px',
      height: '720px',
      panelClass: 'my-padding-dialog',
      data: dialogData,
    });
  }

  public onSignUpClick(template: TemplateRef<any>) {
    const dialogData = {
      username: this.username,
      pw: this.password,
    };

    this.front = false;
    // this.widthToggle = 'sign';

    this.dialog.open(template, {
      width: '800px',
      height: '720px',
      panelClass: 'my-padding-dialog',
      data: dialogData,
    });
  }

  public login(data: any) {
    // const params = new HttpParams({ encoder: new CustomEncoder() }).set('username', this.username).set('password', this.password);

    const params = this.formservice.formToData(data);

    this.common.httpCallPost('user/login', params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.dialog.closeAll();
        this.router.navigateByUrl('/three');
        window.location.reload();
      }
    });
  }

  public onClose() {
    this.dialog.closeAll();
    this.signUpForm.reset({
      username: '',
      email: '',
      password: '',
      rep: '',
    });
    this.auth = null;
    this.authConfirm = false;
    this.userDupleCheck = false;
    this.userDupleConfirm = false;
  }

  public onCreate(e: any) {
    const data = this.formservice.formToData(e);

    this.common.httpCallPost('user/signup', { signup: data }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.dialog.closeAll();
        this.signUpForm.reset({
          username: '',
          email: '',
          password: '',
          rep: '',
        });
        this.auth = null;
        this.authConfirm = false;
        this.userDupleCheck = false;
        this.userDupleConfirm = false;
      }
    });
  }

  public checkEmail(email: any) {
    if (email === null) {
      return false;
    } else {
      this.auth = null;
      this.common.httpCallGet('service/mails/check', { target: email }).subscribe((res: any) => {
        console.log('auth number : ' + res.result);
        this.auth = res.result;
      });
    }
  }

  public checkAuth() {
    if (this.number === this.auth) {
      this.auth = null;
      this.authConfirm = true;
    } else {
      this.authConfirm = false;
    }
  }

  public onDoubleCheck(userName: string) {
    this.userDupleConfirm = true;
    this.common.httpCallGet('service/users/duplicate', { userName }).subscribe((res: any) => {
      this.userDupleCheck = res.result;
    });
  }

  public kakaoLogin() {
    // tslint:disable-next-line: max-line-length
    window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=c4d7328a864db7fd90be93def8e00940&redirect_uri=http://localhost:8090/oauth/kakao&response_type=code';
  }
}
