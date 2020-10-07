import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from '../cookie/cookies.service';

@Injectable({
  providedIn: 'root',
})
export class JwtService {

  public helper = new JwtHelperService();

  constructor(private cookie: CookieService) { }

  public getJWTUser() {
    if (this.cookie.getCookie('UWT') !== null) {
      const jwtEncode = this.cookie.getCookie('UWT');
      return this.helper.decodeToken(jwtEncode);
    } else {
      return null;
    }
  }

  public getJWTAccess() {
    if (this.cookie.getCookie('AWT') !== null) {
      const jwtEncode = this.cookie.getCookie('AWT');
      // return this.helper.decodeToken(jwtEncode);
    } else {
      return null;
    }
  }

  public getJWTRefresh() {
    if (this.cookie.getCookie('RWT') !== null) {
      const jwtEncode = this.cookie.getCookie('RWT');
      // return this.helper.decodeToken(jwtEncode);
    } else {
      return null;
    }
  }

  public getJWTUserKey(key: any) {
    if (this.cookie.getCookie('UWT') !== null) {
      const jwtEncode = this.cookie.getCookie('UWT');

      const jwt: any = this.helper.decodeToken(jwtEncode);

      // tslint:disable-next-line: no-eval
      return eval('jwt.' + key);
    } else {
      return null;
    }
  }

  // public getJWTAccessKey(key: any) {
  //   if (this.cookie.getCookie('AWT') !== null) {
  //     const jwtEncode = this.cookie.getCookie('AWT');

  //     const jwt: any = this.helper.decodeToken(jwtEncode);

  //     // tslint:disable-next-line: no-eval
  //     return eval('jwt.' + key);
  //   } else {
  //     return null;
  //   }
  // }

  // public getJWTRefreshKey(key: any) {
  //   if (this.cookie.getCookie('RWT') !== null) {
  //     const jwtEncode = this.cookie.getCookie('RWT');

  //     const jwt: any = this.helper.decodeToken(jwtEncode);

  //     // tslint:disable-next-line: no-eval
  //     return eval('jwt.' + key);
  //   } else {
  //     return null;
  //   }
  // }
}
