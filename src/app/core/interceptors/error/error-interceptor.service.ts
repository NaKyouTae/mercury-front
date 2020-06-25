import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { throwError } from 'rxjs';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private cookie: CookieService, private router: Router) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(request).pipe(
      catchError((error) => {
        let errorMsg = '';
        if (error.status === 287) {
          alert('로그인 유효기간이 만료 되었습니다. 다시 로그인 해주세요.');
          errorMsg = '로그인 유효기간이 만료 되었습니다. 다시 로그인 해주세요.';

          this.cookie.deleteCookie('AWT');
          this.cookie.deleteCookie('RWT');
          this.cookie.deleteCookie('UWT');

          this.router.navigateByUrl('/three');
        }
        return throwError(errorMsg);
      })
    );
  }
}
