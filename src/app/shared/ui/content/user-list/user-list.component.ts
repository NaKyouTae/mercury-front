import { Component, OnInit, Input, OnDestroy, SimpleChanges, HostListener } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { ObservableService } from 'src/app/shared/common/observable/observable.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('data') public datas?: any = new Array();
  // tslint:disable-next-line: no-input-rename
  @Input('top') public topThreeData?: any = new Array();
  // tslint:disable-next-line: no-input-rename
  @Input('word') public words: any;
  // tslint:disable-next-line: no-input-rename
  @Input('type') public type: any;
  // tslint:disable-next-line: no-input-rename
  @Input('my') public my: any;

  public loginCheck: any = this.jwt.getJWTUserKey('aud') !== null ? true : false;
  public user: any = this.jwt.getJWTUserKey('user') !== null ? this.jwt.getJWTUserKey('user') : '';
  public userRole: any = this.jwt.getJWTUserKey('roles') !== null ? this.jwt.getJWTUserKey('roles') : [];
  public btnCheck: any = true;
  public interval: any;
  public searchType = 'words';

  public originData: any;
  public dataPin: any = 10;

  constructor(private common: CommonHttpService, private observable: ObservableService, private jwt: JwtService) {
    this.observable.sourceObv.subscribe((res: any) => {
      this.type = res;
      this.getList();
      this.getTopThree();
    });
  }

  ngOnInit() {
    if (!this.my) {
      this.onInit();
      this.interval = setInterval(() => {
        this.onInit();
      }, 30000);
    }
  }

  ngOnDestroy() {
    if (!this.my) {
      clearTimeout(this.interval);
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes.datas !== undefined) {
      if (changes.datas.previousValue !== undefined && changes.datas.previousValue.length !== 0) {
        console.log('changedata');
        this.getList();
      }
    }

    if (changes.topThreeData !== undefined) {
      if (changes.topThreeData.previousValue !== undefined && changes.topThreeData.previousValue.length !== 0) {
        console.log('changetop');
        this.getList();
      }
    }
  }
  public onInit() {
    this.getList();
    this.getTopThree();
  }
  public getTopThree() {
    this.common.httpCallGet('service/' + this.type + '/popular', { userIdx: this.user.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.topThreeData = res.result.slice(0, 3);
        // this.checkLove(this.topThreeData);
      } else {
        this.topThreeData = new Array();
      }
    });
  }

  public getList() {
    this.common.httpCallGet('service/' + this.type + '/' + this.searchType, { userIdx: this.user.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.originData = res.result;
        this.datas = res.result.slice(0, this.dataPin);
        // this.checkLove(this.datas);
      } else {
        this.datas = new Array();
      }
    });
  }

  public upLove(e: any) {
    e.point = e.point + 1;
    e.love = true;
    e.loveName = this.user.username;
    this.common.httpCallPut('service/' + this.type + '/' + e.idx, e).subscribe((res: any) => {
      this.getList();
      this.getTopThree();
    });
  }

  public deLove(e: any) {
    this.common.httpCallDelete('service/loves', { userIdx: this.user.idx, contentIdx: e.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.getList();
        this.getTopThree();
      }
    });
  }

  // public checkLove(data: any) {
  //   data.forEach((item: any) => {
  //     const idx = this.user.idx === undefined ? 'null' : this.user.idx;
  //     this.common.httpCallGet('service/loves/check', { contentIdx: item.idx, userIdx: idx }).subscribe((res: any) => {
  //       if (res.result === false || res.result === null) {
  //         item.me = false;
  //       } else {
  //         item.me = true;
  //       }
  //     });
  //   });
  // }

  public orPopular() {
    this.searchType = 'popular';
    this.btnCheck = false;
    this.getList();
  }

  public orLatest() {
    this.searchType = 'words';
    this.btnCheck = true;
    this.getList();
  }

  public onContentUpdate(data: any) {
    this.common.httpCallPut('service/' + this.type + '/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.getList();
        this.getTopThree();
      }
    });
  }

  public onDelete(data: any) {
    const routeUrl = this.type;

    if (window.confirm('삭제 하시겠습니까?')) {
      this.common.httpCallDelete('service/' + routeUrl + '/' + data.idx, data).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          this.getList();
          this.getTopThree();
          this.observable.deleteHistory('Delete');
        }
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(e: any) {
    if ((e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop) <= e.target.scrollingElement.offsetHeight + 500
      && this.originData.length !== this.datas.length) {
      console.log('scroll event start');

      if (this.originData.length < this.dataPin + 10) {
        this.dataPin = this.originData.length;
        this.datas = this.originData;
      } else {
        this.dataPin += 10;
        this.datas = this.originData.slice(0, this.dataPin);
      }
    }
  }
}
