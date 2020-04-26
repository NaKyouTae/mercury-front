import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/shared/common/cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialog, private common: CommonHttpService, private router: Router, private cookie: CookieService) {}

  ngOnInit() {}

  // tslint:disable-next-line: member-ordering
  public username: string;
  // tslint:disable-next-line: member-ordering
  public password: string;

  onClick(template: TemplateRef<any>) {
    const dialogData = {
      username: this.username,
      pw: this.password,
    };

    this.dialog.open(template, {
      width: '400px',
      height: '250px',
      data: dialogData,
    });
  }

  login() {
    const data = {
      username: encodeURI(this.username),
      password: encodeURI(this.password),
    };

    this.common.httpCallPost('user/login', data).subscribe((res: any) => {
      console.log(res);
      this.dialog.closeAll();
      this.router.navigateByUrl('/three');
      // User Info Set Cookie
      this.cookie.setCookie('UserName', res.result.username, 1);
      this.cookie.setCookie('Authorities', res.result.authorities, 1);
      this.cookie.setCookie('N-Token', res.result.token, 1);
    });
  }
}
