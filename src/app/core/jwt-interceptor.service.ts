import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '../shared/common/cookie/cookies.service';

@Injectable()
export class JwtInterceptorService {

  constructor(private cookie: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userJWT = this.cookie.getCookie('userJWT');
    if (userJWT) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + userJWT
        }
      });

      return next.handle(req);
    }
  }
}
