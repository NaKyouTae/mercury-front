import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmComponent } from 'src/app/shared/ui/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmService } from 'src/app/shared/ui/confirm/confirm.service';

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
  constructor(
    private router: Router,
    private jwt: JwtService,
    private common: CommonHttpService,
    private cookie: CookieService,
    private confirmService: ConfirmService,
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() { }

  public logout() {
    const initialState = {
      title: '로그 아웃',
      btnCount: 2,
      width: 300,
      content: '로그아웃 하시겠습니까?',
      rightBtnTitle: '로그아웃',
      eventResult: false
    };

    this.bsModalRef = this.confirmService.showConfirm(initialState);
    this.bsModalRef.content.eventResult.subscribe((event: any) => {
      if (event) {
        this.common.httpCallGet('user/logout').subscribe((res: any) => {
          if (res.resultCode === 'OK') {
            this.router.navigateByUrl('/three');
            window.location.reload();
          }
        });
      } else {
        return false;
      }
    });
  }

  public kakaoByLogout() {
    const initialState = {
      title: '로그 아웃',
      btnCount: 2,
      width: 300,
      content: '로그아웃 하시겠습니까?',
      rightBtnTitle: '로그아웃',
      eventResult: false
    };

    this.bsModalRef = this.confirmService.showConfirm(initialState);
    this.bsModalRef.content.eventResult.subscribe((event: any) => {
      if (event) {
        // 세션 만료 후 로그아웃 재 로그인시 카카오톡 계정 입력창 노출
        // tslint:disable-next-line: max-line-length
        // window.location.href = 'https://kauth.kakao.com/oauth/logout?client_id=c4d7328a864db7fd90be93def8e00940&logout_redirect_uri=http://localhost:4300/user/kakao/logout&state=access_token';

        // 사이트 자체 로그 아웃 카카오톡 세션은 유지 시킨다.
        this.common.httpCallGet('user/kakao/logout', { access: this.cookie.getCookie('AWT') }).subscribe((res: any) => {
          if (res.resultCode === 'OK') {
            this.router.navigateByUrl('/three');
            window.location.reload();
          }
        });
      } else {
        return false;
      }
    });
  }
}
