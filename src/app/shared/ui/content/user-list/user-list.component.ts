import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { ObservableService } from 'src/app/shared/common/observable/observable.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('data') public datas: any = new Array();
  // tslint:disable-next-line: no-input-rename
  @Input('word') public words: any;
  // tslint:disable-next-line: no-input-rename
  @Input('type') public type: any;
  // tslint:disable-next-line: no-input-rename
  @Input('my') public my: any;

  public loginCheck: any = this.jwt.getJWTUserKey('aud') !== null ? true : false;
  public userName: any = this.jwt.getJWTUserKey('aud') !== null ? this.jwt.getJWTUserKey('aud') : '';
  public userRole: any = this.jwt.getJWTUserKey('roles') !== null ? this.jwt.getJWTUserKey('roles') : [];
  public btnCheck: any = true;

  constructor(private common: CommonHttpService, private observable: ObservableService, private jwt: JwtService) {
    this.observable.sourceObv.subscribe((res: any) => {
      this.type = res;
      this.getList();
    });
  }

  ngOnInit() {
    if (this.my) {
      setInterval(() => {
        this.getList();
      }, 30000);
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    if (this.datas !== undefined) {
      this.checkLove();
    }
  }

  public getList() {
    this.common.httpCallGet('service/' + this.type + '/words').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.datas = res.result;
        this.checkLove();
      } else {
        this.datas = new Array();
      }
    });
  }

  public upLove(e: any) {
    e.point = e.point + 1;
    e.love = true;
    e.loveName = this.userName;
    this.common.httpCallPut('service/' + this.type + '/' + e.idx, e).subscribe((res: any) => {
      this.getList();
    });
  }

  public deLove(e: any) {
    e.point = e.point - 1;
    e.love = true;
    e.loveName = this.userName;
    // contentIdx = e.idx
    // userIdx = this.user.idx;

    this.common.httpCallPut('service/' + this.type + '/' + e.idx, e).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.getList();
      }
    });
  }

  public checkLove() {
    this.datas.forEach((item: any) => {
      this.common.httpCallGet('service/loves', { contentIdx: item.idx, username: this.userName }).subscribe((res: any) => {
        if (res.result === false || res.result === null) {
          item.me = false;
        } else {
          item.me = true;
        }
      });
    });
  }

  public orPopular(type: string) {
    this.common.httpCallGet('service/' + this.type + '/popular').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.datas = res.result;
        this.checkLove();
      } else {
        this.datas = new Array();
      }
    });

    this.btnCheck = false;
  }

  public orLatest(type: string) {
    this.getList();
    this.btnCheck = true;
  }

  public onContentUpdate(data: any) {
    this.common.httpCallPut('service/' + this.type + '/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.getList();
      }
    });
  }

  public onDelete(data: any) {
    const routeUrl = this.type;

    if (window.confirm('삭제 하시겠습니까?')) {
      this.common.httpCallDelete('service/' + routeUrl + '/' + data.idx, data).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          this.getList();
          this.observable.deleteHistory('Delete');
        }
      });
    }
  }
}
