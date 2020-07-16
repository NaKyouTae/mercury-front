import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-my-two',
  templateUrl: './my-two.component.html',
  styleUrls: ['./my-two.component.css'],
})
export class MyTwoComponent implements OnInit {
  public data: any = new Array();
  public word: any;
  public jwtUser = this.jwt.getJWTUserKey('user');
  constructor(private common: CommonHttpService, private jwt: JwtService) { }

  ngOnInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/twice/user', { userIdx: this.jwtUser.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result.length > 0) {
        this.data = res.result;
        this.getWord(this.data[0].wordIdx);
      }
    });
  }

  public getWord(wordIdx: any) {
    this.common.httpCallGet('service/words/' + wordIdx, { wordIdx }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.word = res.result;
      }
    });
  }
}
