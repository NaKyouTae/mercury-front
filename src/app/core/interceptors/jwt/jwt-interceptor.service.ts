import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '../../../shared/common/cookie/cookies.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { map } from 'rxjs/operators';

@Injectable()
export class JwtInterceptorService {
  constructor(private cookie: CookieService, private jwt: JwtService, private common: CommonHttpService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Access = this.cookie.getCookie('Access-JWT');
    const Refresh = this.cookie.getCookie('Refresh-JWT');

    if (Access !== null && Refresh !== null) {
      req = req.clone({
        setHeaders: {
          'Access-JWT': Access,
          'Refresh-JWT': Refresh,
        },
      });
    }

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response and headers you want
          if (event.body.resultCode === 'OK' && event.body.result !== null) {

            const accessIsExpired = this.isTokenExpired(this.jwt.getJWTAccessKey('exp'));
            const refreshIsExpired = this.isTokenExpired(this.jwt.getJWTRefreshKey('exp'));

            if (!accessIsExpired) {
              this.cookie.setCookie('Access-JWT', event.headers.get('Access-JWT'));
            }

            if (!refreshIsExpired) {
              this.cookie.setCookie('Refresh-JWT', event.headers.get('Refresh-JWT'));
            }
          }
        }
        return event;
      }));
  }

  isTokenExpired(exp: any): boolean {
    if (exp === null) {
      return false;
    }

    return !(Date.now() >= exp * 1000);
  }
}
