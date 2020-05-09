import { Injectable } from '@angular/core';
import { CookieService } from '../cookie/cookies.service';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(private cookie: CookieService) {}

  public getJWTAccess() {
    if (this.cookie.getCookie('Access-JWT') !== null) {
      const jwtEncode = this.cookie.getCookie('Access-JWT');
      return jwt_decode(jwtEncode);
    } else {
      return null;
    }
  }

  public getJWTRefresh() {
    if (this.cookie.getCookie('Refresh-JWT') !== null) {
      const jwtEncode = this.cookie.getCookie('Refresh-JWT');
      return jwt_decode(jwtEncode);
    } else {
      return null;
    }
  }

  public getJWTAccessKey(key: any) {
    if (this.cookie.getCookie('Access-JWT') !== null) {
      const jwtEncode = this.cookie.getCookie('Access-JWT');

      const jwt: any = jwt_decode(jwtEncode);

      // tslint:disable-next-line: no-eval
      return eval('jwt.' + key);
    } else {
      return null;
    }
  }

  public getJWTRefreshKey(key: any) {
    if (this.cookie.getCookie('Refresh-JWT') !== null) {
      const jwtEncode = this.cookie.getCookie('Refresh-JWT');

      const jwt: any = jwt_decode(jwtEncode);

      // tslint:disable-next-line: no-eval
      return eval('jwt.' + key);
    } else {
      return null;
    }
  }
}
