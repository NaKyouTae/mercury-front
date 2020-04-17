import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginInterceptorService implements HttpInterceptor {

  constructor(private cookie: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response and headers you want
        if (event.body.resultCode === 'OK' && event.body.result !== null) {
          this.cookie.set('Set-Cookie', 'HttpOnly;Secure;SameSite=Strict');
          this.cookie.set('user', 'test');
        }
      }
      return event;
    }));
  }
}
