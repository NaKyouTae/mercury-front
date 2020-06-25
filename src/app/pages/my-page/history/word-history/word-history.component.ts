import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nkt-word-history',
  templateUrl: './word-history.component.html',
  styleUrls: ['./word-history.component.css'],
})
export class WordHistoryComponent implements OnInit {
  @Input() public type: any;

  public data: any;
  public word: any = '';
  public number: any = 0;
  public tot: any = this.data === undefined ? 0 : this.data.length;
  public jwtUser = this.jwt.getJWTUserKey('user');
  public historyForm: any = true;

  constructor(private common: CommonHttpService, private jwt: JwtService) { }

  ngOnInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/' + this.type + '/' + this.jwtUser.idx, { userIdx: this.jwtUser.idx }).subscribe((res: any) => {
      if (res.result.length !== 0) {
        this.data = res.result;
        this.tot = this.data.length;
        this.getWord(res.result[0].wordIdx);
      }
    });
  }

  public getWord(wordIdx: any) {
    this.common.httpCallGet('service/words/' + wordIdx, { wordIdx }).subscribe((res: any) => {
      this.word = res.result;
    });
  }

  public onNext(wordIdx: any) {
    if (this.data.length === this.number) {
      return false;
    } else {
      this.getWord(wordIdx);
      this.number += 1;
    }
  }

  public onPrev(wordIdx: any) {
    if (this.number === 0) {
      return false;
    } else {
      this.getWord(wordIdx);
      this.number -= 1;
    }
  }

  public onDelete(data: any, type: any) {
    const routeUrl = type === 'THREE' ? 'three' : 'twice';

    if (window.confirm('삭제 하시겠습니까?')) {
      this.common.httpCallDelete('service/' + routeUrl + '/' + data.idx, data).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          this.onSearch();
        }
      });
    }
  }
}
