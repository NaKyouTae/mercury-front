import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '../../../shared/common/cookie/cookies.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import * as moment from 'moment/moment';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Injectable()
export class JwtInterceptorService {

  constructor(private cookie: CookieService, private jwt: JwtService, private common: CommonHttpService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let Access = this.cookie.getCookie('Access-JWT');
    const Refresh = this.cookie.getCookie('Refresh-JWT');

    if (Access !== null && Refresh !== null) {
      const accessTime = this.jwt.getJWTAccessKey('exp');
      const exprieTime = moment.duration(accessTime);

      if (2 >= exprieTime.minutes()) {
        this.common.httpCallGet('service/tokens', Refresh).subscribe((res: any) => {
          Access = res.result;

          req = req.clone({
            setHeaders: {
              'Access-JWT': Access,
              'Refresh-JWT': Refresh
            }
          });

        });
      } else {
        req = req.clone({
          setHeaders: {
            'Access-JWT': Access,
            'Refresh-JWT': Refresh
          }
        });
      }
    }

    return next.handle(req);
  }
}
