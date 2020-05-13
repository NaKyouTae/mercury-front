import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-my-two',
  templateUrl: './my-two.component.html',
  styleUrls: ['./my-two.component.css'],
})
export class MyTwoComponent implements OnInit {
  public data: any;
  public jwtUser = this.jwt.getJWTAccessKey('user');
  constructor(private common: CommonHttpService, private jwt: JwtService) {}

  ngOnInit() {}
  public onTwo() {
    this.common.httpCallGet('service/twice/' + this.jwtUser.idx, { userIdx: this.jwtUser.idx }).subscribe((res: any) => {
      this.data = res.result;
    });
  }
}
