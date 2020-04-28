import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '../../../shared/common/cookie/cookies.service';

@Injectable()
export class JwtInterceptorService {

  constructor(private cookie: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Access = this.cookie.getCookie('Access-JWT');
    const Refresh = this.cookie.getCookie('Refresh-JWT');
    if (Access !== null && Refresh !== null) {
      req = req.clone({
        setHeaders: {
          'Access-JWT': Access,
          'Refresh-JWT': Refresh
        }
      });
    }
    return next.handle(req);
  }
}
