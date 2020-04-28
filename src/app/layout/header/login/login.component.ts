import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonHttpService, CustomEncoder } from 'src/app/shared/common/common-http.service';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';
import { HttpParams, HttpClient, HttpResponse } from '@angular/common/http';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { windowToggle } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialog, private http: HttpClient, private router: Router, private jwt: JwtService) {}

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
    // const params = new HttpParams({ encoder: new CustomEncoder() }).set('username', this.username).set('password', this.password);

    // const params = { username: this.username, password: this.password };

    // tslint:disable-next-line: max-line-length
    this.http.post('http://localhost:8080/user/login', { username: this.username, password: this.password }).subscribe((res: HttpResponse<any>) => {
      this.dialog.closeAll();
      this.router.navigateByUrl('/three');
      window.location.reload();
      // console.log('Access : ' + this.jwt.getJWTAccess());
      // console.log('Refresh : ' + this.jwt.getJWTRefresh());
    });
  }
}
