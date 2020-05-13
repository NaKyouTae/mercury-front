import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  public data: any;
  public fields: any;
  public jwtUser = this.jwt.getJWTAccessKey('user');
  constructor(private common: CommonHttpService, private jwt: JwtService) { }

  ngOnInit() {
    this.onThree();
    console.log(this.jwtUser.idx);
  }

  public onThree() {
    this.common.httpCallGet('service/three/' + this.jwtUser.idx, { userIdx: this.jwtUser.idx }).subscribe((res: any) => {
      this.data = res.result;
      this.fields = [
        { title: '1', width: 50 / 3, field: 'contentOne' },
        { title: '2', width: 50 / 3, field: 'contentTwo' },
        { title: '3', width: 50 / 3, field: 'contentThree' },
        { title: '하트 수', width: 10, field: 'point' },
        { title: '작성 일', width: 20, field: 'insertDate' },
        { title: '수정 일', width: 20, field: 'updateDate' },
      ];
    });
  }

  public onTwo() {
    this.common.httpCallGet('service/twice/' + this.jwtUser.idx, { userIdx: this.jwtUser.idx }).subscribe((res: any) => {
      this.data = res.result;
      this.fields = [
        { title: '1', width: 25, field: 'contentOne' },
        { title: '2', width: 25, field: 'contentTwo' },
        { title: '하트 수', width: 10, field: 'point' },
        { title: '작성 일', width: 20, field: 'insertDate' },
        { title: '수정 일', width: 20, field: 'updateDate' },
      ];
    });
  }
}
