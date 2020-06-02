import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-my-three',
  templateUrl: './my-three.component.html',
  styleUrls: ['./my-three.component.css'],
})
export class MyThreeComponent implements OnInit {
  public data: any;
  public word: any;
  public number: any = 0;
  public jwtUser = this.jwt.getJWTAccessKey('user');
  constructor(private common: CommonHttpService, private jwt: JwtService) {}

  ngOnInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/three/' + this.jwtUser.idx, { userIdx: this.jwtUser.idx }).subscribe((res: any) => {
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

  public onNext() {
    if (this.data.length === this.number) {
      return false;
    } else {
      this.number += 1;
    }
  }

  public onPrev() {
    if (this.number === 0) {
      return false;
    } else {
      this.number -= 1;
    }
  }
}
