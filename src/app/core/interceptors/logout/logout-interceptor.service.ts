import { Injectable } from '@angular/core';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LogoutInterceptorService {

  constructor(private cookie: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'http://localhost:8080/user/logout') {
    }
    return next.handle(req);
  }
}
