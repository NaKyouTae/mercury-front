import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';

@Injectable()
export class LoginInterceptorService implements HttpInterceptor {
  constructor(private cookie: CookieService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response and headers you want
          if (event.body.resultCode === 'OK' && event.body.result !== null && event.url === 'http://localhost:4300/user/login') {
            if (event.headers.get('loginType') !== null) {
              console.log('LoginType UPDATE');
              this.cookie.setCookie('loginType', event.headers.get('loginType'));
            }
          }
        }
        return event;
      })
    );
  }
}
