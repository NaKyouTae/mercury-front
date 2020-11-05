import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, style, state, animate, transition } from '@angular/animations';
import { LocalStorageService } from 'src/app/shared/common/localStorage/local-storage.service';
import { FormsService } from 'src/app/shared/common/forms/forms.service';

declare let Kakao: any; //

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
  constructor(private dialog: MatDialog, private formservice: FormsService, private common: CommonHttpService, private router: Router, private localStorageService: LocalStorageService) {}

  public front: any = false;
  public widthToggle: any = this.front ? 'sign' : 'login';
  public upToggle: any = !this.front ? 'upSign' : 'upLogin';

  public username: string;
  public userDupleCheck: any = false;
  public userDupleConfirm: any = false;
  public password: string;
  public loginFail: any = false;

  public auth: any = null;
  public authConfirm: any = false;
  public number: any = null;
  public emailConfirm: any = true;
  public pwConfirm: any = true;
  public ConfirmType: any;

  public loginSave: any = false;

  public logInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    rep: new FormControl('', [Validators.required, Validators.email]),
  });

  public userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public naver: any;
  ngOnInit() {
    Kakao.init('58b766d921ddd12e614e8058e0af5e3d');
    console.log('kakao init', Kakao.isInitialized());
  }

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
    this.loginFail = false;

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
    this.loginFail = false;

    this.dialog.open(template, {
      width: '800px',
      height: '720px',
      panelClass: 'my-padding-dialog',
      data: dialogData,
    });
  }

  public login(data: any) {
    // const params = new HttpParams({ encoder: new CustomEncoder() }).set('username', this.username).set('password', this.password);

    const params: any = this.formservice.formToData(data);
    const loginSaveCheck = this.loginSave;

    this.common.httpCallPost('user/login', params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        // 로그인 정보 기억하기 체크시 LocalStorage에 사용자 아이디 저장
        if (loginSaveCheck) {
          this.localStorageService.set('userId', params.username);
        }

        this.dialog.closeAll();
        this.router.navigateByUrl('/three');
        window.location.reload();
      } else if (res.resultCode === 'INTERNAL_SERVER_ERROR') {
        this.loginFail = true;
      }
    });
  }

  public onSignUp(e: any) {
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
    Kakao.Auth.authorize({ redirectUri: 'http://localhost:4300/user/kakao' });
  }

  public naverLogin() {
    // Client id = tabnzioAUOBXW8u3FvoL
    // Client Secret = suBPetVBDZ

    // this.naver = new naver.LoginWithNaverId({
    //   clientId: 'tabnzioAUOBXW8u3FvoL',
    //   callbackUrl: 'http://localhost:4300',
    //   isPopup: true,
    //   loginButton: { type: 2, height: 40 }
    // })

    // tslint:disable-next-line: no-string-literal
    this.naver = new window['naver_id_login']('tabnzioAUOBXW8u3FvoL', 'http://localhost:4300');
    // tslint:disable-next-line: no-shadowed-variable
    const state = this.naver.getUniqState();
    this.naver.setButton('', 2, 40);
    this.naver.setDomain('http://localhost:4300');
    this.naver.setState(state);
    this.naver.init_naver_id_login();
  }

  public findUserName(e: any, template: TemplateRef<any>) {
    const data = this.formservice.formToData(e);

    this.common.httpCallGet('service/users/ids', data).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.emailConfirm = res.result;
        if (res.result !== false) {
          this.ConfirmType = 'username';
          this.openPopup(template, 400, 300);
        }
      }
    });
  }

  public findPassWord(e: any, template: TemplateRef<any>) {
    const data = this.formservice.formToData(e);

    this.common.httpCallGet('service/users/pws', data).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.pwConfirm = res.result;
        if (res.result !== false) {
          this.ConfirmType = 'password';
          this.openPopup(template, 400, 300);
        }
      }
    });
  }

  public openPopup(template: TemplateRef<any>, width: any, height: any) {
    this.dialog.closeAll();
    this.dialog.open(template, {
      width: width + 'px',
      height: height + 'px',
    });
  }

  public popupClose() {
    this.ConfirmType = null;
    this.dialog.closeAll();
  }
}
