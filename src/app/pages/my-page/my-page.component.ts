import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
})
export class MyPageComponent implements OnInit {
  public userRoles: any = this.jwt.getJWTAccessKey('roles') === null ? [] : this.jwt.getJWTAccessKey('roles');
  public user: any = this.jwt.getJWTAccessKey('user') === null ? [] : this.jwt.getJWTAccessKey('user');
  public jwtUser = this.jwt.getJWTAccessKey('user');
  public routeLinks: any;
  public threeTot: any = 0;
  public twoTot: any = 0;

  constructor(private common: CommonHttpService, private jwt: JwtService) {}

  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/three/' + this.jwtUser.idx, { userIdx: this.jwtUser.idx }).subscribe((res: any) => {
      this.threeTot = res.result.length;
    });

    this.common.httpCallGet('service/twice/' + this.jwtUser.idx, { userIdx: this.jwtUser.idx }).subscribe((res: any) => {
      this.twoTot = res.result.length;
    });
  }
}
