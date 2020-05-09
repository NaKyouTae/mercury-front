import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/util/forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialog, private formservice: FormsService, private common: CommonHttpService, private router: Router) {}

  // tslint:disable-next-line: member-ordering
  public username: string;
  // tslint:disable-next-line: member-ordering
  public password: string;

  public logInForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    passWord: new FormControl('', Validators.required),
  });

  public signUpForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    passWord: new FormControl('', Validators.required),
    rep: new FormControl('', Validators.required),
  });

  ngOnInit() {}

  public onClick(template: TemplateRef<any>) {
    const dialogData = {
      username: this.username,
      pw: this.password,
    };

    this.dialog.open(template, {
      width: '400px',
      height: '260px',
      data: dialogData,
    });
  }

  public onSignUpClick(template: TemplateRef<any>) {
    const dialogData = {
      username: this.username,
      pw: this.password,
    };

    this.dialog.open(template, {
      width: '400px',
      height: '410px',
      data: dialogData,
    });
  }

  public login(data: any) {
    // const params = new HttpParams({ encoder: new CustomEncoder() }).set('username', this.username).set('password', this.password);

    const params = this.formservice.formToData(data);

    this.common.httpCallPost('user/login', params).subscribe((res: HttpResponse<any>) => {
      this.dialog.closeAll();
      this.router.navigateByUrl('/three');
      window.location.reload();
    });
  }

  public onClose() {}

  public onCreate(e: any) {
    const data = this.formservice.formToData(e);

    this.common.httpCallPost('user/signup', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.signUpForm.reset({
          userName: '',
          email: '',
          passWord: '',
          rep: '',
        });
      }
    });
  }
}
