import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  public loginCheck: any = this.jwt.getJWTAccess() === null ? false : true;

  constructor(private router: Router, private jwt: JwtService) { }
  // tslint:disable-next-line: max-line-length
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginCheck === true) {
      return true;
    }

    this.router.navigateByUrl('/three');
    return false;
  }
}
