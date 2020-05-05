import { Injectable } from '@angular/core';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LogoutInterceptorService {

  constructor(private cookie: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response and headers you want
          if (event.body.resultCode === 'OK' && event.body.result !== null && event.url === 'http://localhost:8080/user/logout') {
            this.cookie.deleteCookie('Access-JWT');
            this.cookie.deleteCookie('Refresh-JWT');
          }
        }
        return event;
      })
    );
  }
}