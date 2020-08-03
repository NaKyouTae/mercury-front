import { Injectable } from '@angular/core';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LogoutInterceptorService {
  constructor(private cookie: CookieService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response and headers you want
          if (event.body.resultCode === 'OK' && event.body.result !== null && event.url.includes('user/logout')) {
            this.cookie.deleteCookie('AWT');
            this.cookie.deleteCookie('RWT');
            this.cookie.deleteCookie('UWT');
          }
        }
        return event;
      })
    );
  }
}
