import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public userCheck: any = this.jwt.getJWTAccessKey('sub') !== null ? true : false;
  public userName: any = this.jwt.getJWTAccessKey('sub') !== null ? this.jwt.getJWTAccessKey('sub') : '사용자';

  constructor(private router: Router, private jwt: JwtService, private common: CommonHttpService) {}

  ngOnInit() {}

  public onClick() {
    this.router.navigateByUrl('/three');
  }

  public logout() {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      this.common.httpCallGet('user/logout').subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          this.router.navigateByUrl('/three');
          window.location.reload();
        }
      });
    } else {
      return false;
    }
  }
}
