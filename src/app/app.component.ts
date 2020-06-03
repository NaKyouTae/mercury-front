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

  constructor(private common: CommonHttpService) {}

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
}
