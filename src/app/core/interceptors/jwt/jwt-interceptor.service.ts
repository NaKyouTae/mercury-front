import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '../../../shared/common/cookie/cookies.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptorService {
  constructor(private cookie: CookieService, private jwt: JwtService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Access = this.cookie.getCookie('AWT');
    const Refresh = this.cookie.getCookie('RWT');
    // const accessIsExpired = this.isTokenExpired(this.jwt.getJWTAccessKey('exp'));
    // const refreshIsExpired = this.isTokenExpired(this.jwt.getJWTRefreshKey('exp'));

    if (Access !== null && Refresh !== null) {
      req = req.clone({
        setHeaders: {
          AWT: Access,
          RWT: Refresh,
        },
      });
    }

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response and headers you want
          if (event.body.resultCode === 'OK' && event.body.result !== null) {

            if (event.headers.get('AWT') !== null) {
              this.cookie.setCookie('AWT', event.headers.get('AWT'));
            }

            if (event.headers.get('RWT') !== null) {
              this.cookie.setCookie('RWT', event.headers.get('RWT'));
            }
          }
        }
        return event;
      })
    );
  }

  public isTokenExpired(exp: any): boolean {
    if (exp === null) {
      return false;
    }

    return !(Date.now() >= exp * 1000);
  }
}
