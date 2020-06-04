import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { JwtService } from './shared/common/jwt/jwt.service';
import { CommonHttpService } from './shared/common/common-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: any = '천하제일 엔행시 대회';
  public data: any;
  public user: any = this.jwt.getJWTAccessKey('user') === null ? null : this.jwt.getJWTAccessKey('user');
  constructor(private common: CommonHttpService, private jwt: JwtService) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/notices/pop', { type: 'y' }).subscribe((res: any) => {
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
