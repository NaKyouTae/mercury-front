import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginInterceptorService implements HttpInterceptor {
  constructor(private cookie: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('login');

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response and headers you want
          if (event.body.resultCode === 'OK' && event.body.result !== null && event.url === 'http://localhost:8080/user/login') {
            this.cookie.set('Set-Cookie', 'HttpOnly;Secure;SameSite=Strict');
            this.cookie.set('Access-JWT', event.headers.get('Access-JWT'));
            this.cookie.set('Refresh-JWT', event.headers.get('Refresh-JWT'));
          }
        }
        return event;
      })
    );
  }
}
