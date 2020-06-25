import { Injectable } from '@angular/core';
import { CookieService } from '../cookie/cookies.service';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(private cookie: CookieService) { }

  public getJWTUser() {
    if (this.cookie.getCookie('UWT') !== null) {
      const jwtEncode = this.cookie.getCookie('UWT');
      return jwt_decode(jwtEncode);
    } else {
      return null;
    }
  }

  public getJWTAccess() {
    if (this.cookie.getCookie('AWT') !== null) {
      const jwtEncode = this.cookie.getCookie('AWT');
      return jwt_decode(jwtEncode);
    } else {
      return null;
    }
  }

  public getJWTRefresh() {
    if (this.cookie.getCookie('RWT') !== null) {
      const jwtEncode = this.cookie.getCookie('RWT');
      return jwt_decode(jwtEncode);
    } else {
      return null;
    }
  }

  public getJWTUserKey(key: any) {
    if (this.cookie.getCookie('UWT') !== null) {
      const jwtEncode = this.cookie.getCookie('UWT');

      const jwt: any = jwt_decode(jwtEncode);

      // tslint:disable-next-line: no-eval
      return eval('jwt.' + key);
    } else {
      return null;
    }
  }

  public getJWTAccessKey(key: any) {
    if (this.cookie.getCookie('AWT') !== null) {
      const jwtEncode = this.cookie.getCookie('AWT');

      const jwt: any = jwt_decode(jwtEncode);

      // tslint:disable-next-line: no-eval
      return eval('jwt.' + key);
    } else {
      return null;
    }
  }

  public getJWTRefreshKey(key: any) {
    if (this.cookie.getCookie('RWT') !== null) {
      const jwtEncode = this.cookie.getCookie('RWT');

      const jwt: any = jwt_decode(jwtEncode);

      // tslint:disable-next-line: no-eval
      return eval('jwt.' + key);
    } else {
      return null;
    }
  }
}
