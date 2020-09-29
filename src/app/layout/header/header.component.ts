import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public user: any = this.jwt.getJWTUserKey('user');
  public userCheck: any = this.user !== null ? true : false;
  public userName: any = this.user !== null ? this.user.username : '사용자';
  public loginType: any = this.jwt.getJWTUserKey('user') === null ? null : this.jwt.getJWTUserKey('user').sns;
  constructor(private router: Router, private jwt: JwtService, private common: CommonHttpService, private cookie: CookieService) { }

  ngOnInit() { }

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

  public kakaoByLogout() {
    if (window.confirm('로그아웃 하시겠습니까?')) {

      // tslint:disable-next-line: max-line-length
      window.location.href = 'http://kauth/kakao.com/oauth/logout?client_id=c4d7328a864db7fd90be93def8e00940&logout_redirect_uri=http://localhost:4300/user/kakao/logout&state=access_token'

      // this.common.httpCallGet('user/kakao/logout', { acess: this.cookie.getCookie('AWT') }).subscribe((res: any) => {
      //   if (res.resultCode === 'OK') {
      //     this.router.navigateByUrl('/three');
      //     window.location.reload();
      //   }
      // });
    } else {
      return false;
    }
  }
}
