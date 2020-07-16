import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { JwtService } from './shared/common/jwt/jwt.service';
import { CommonHttpService } from './shared/common/http/common-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: any = '천하제일 엔행시 대회';
  public data: any;
  public user: any = this.jwt.getJWTUserKey('user') === null ? null : this.jwt.getJWTUserKey('user');
  constructor(private common: CommonHttpService, private jwt: JwtService) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.search();
  }

  public search() {
    // tslint:disable-next-line: max-line-length
    this.common.httpCallGet('service/notices/pop', { type: 'y', username: this.user === null ? null : this.user.username }).subscribe((res: any) => {
      this.data = res.result;
    });
  }

  public onClose(template: any) {
    template.style.display = 'none';
  }

  public noNotice(notice: any) {
    this.common.httpCallPost('service/notices/never', { notice, user: this.user }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        return true;
      }
    });
  }
}
