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

  public userCheck: any = this.jwt.getJWTUserKey('sub') !== null ? true : false;
  public userName: any = this.jwt.getJWTUserKey('sub') !== null ? this.jwt.getJWTUserKey('sub') : '';
  public userRole: any = this.jwt.getJWTUserKey('roles') !== null ? this.jwt.getJWTUserKey('roles') : [];
  public btnCheck: any = true;

  constructor(private common: CommonHttpService, private observable: ObservableService, private jwt: JwtService) {
    this.observable.sourceObv.subscribe((res: any) => {
      if (res === 'THREE') {
        this.getThreeList();
      } else if (res === 'TWO') {
        this.getTwoList();
      }
    });
  }

  ngOnInit() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    if (this.datas !== null) {
      this.checkLove();
    }
  }

  public getThreeList() {
    this.common.httpCallGet('service/three/words').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.datas = res.result;
        this.checkLove();
      } else {
        this.datas = new Array();
      }
    });
  }

  public getTwoList() {
    this.common.httpCallGet('service/twice/words').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.datas = res.result;
        this.checkLove();
      } else {
        this.datas = new Array();
      }
    });
  }

  public upThreeLove(e: any) {
    e.point = e.point + 1;
    e.love = true;
    e.loveName = this.userName;
    this.common.httpCallPut('service/three/' + e.idx, e).subscribe((res: any) => {
      this.getThreeList();
    });
  }

  public upTwoLove(e: any) {
    e.point = e.point + 1;
    e.love = true;
    e.loveName = this.userName;
    this.common.httpCallPut('service/twice/' + e.idx, e).subscribe((res: any) => {
      this.getTwoList();
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
    if (type === 'THREE') {
      this.common.httpCallGet('service/three/popular').subscribe((res: any) => {
        if (res.resultCode === 'OK' && res.result !== null) {
          this.datas = res.result;
          this.checkLove();
        } else {
          this.datas = new Array();
        }
      });
    } else if (type === 'TWO') {
      this.common.httpCallGet('service/twice/popular').subscribe((res: any) => {
        if (res.resultCode === 'OK' && res.result !== null) {
          this.datas = res.result;
          this.checkLove();
        } else {
          this.datas = new Array();
        }
      });
    }
    this.btnCheck = false;
  }

  public orLatest(type: string) {
    if (type === 'THREE') {
      this.getThreeList();
    } else if (type === 'TWO') {
      this.getTwoList();
    }
    this.btnCheck = true;
  }

  // public onContentUpdate(data: any, type: any) {
  //   if (type === 'THREE') {
  //     this.common.httpCallPut('service/three/' + data.idx, data).subscribe((res: any) => {
  //       if (res.resultCode === 'OK') {
  //         this.getThreeList();
  //       }
  //     });
  //   } else if (type === 'TWO') {
  //     this.common.httpCallPut('service/twice/' + data.idx, data).subscribe((res: any) => {
  //       if (res.resultCode === 'OK') {
  //         this.getTwoList();
  //       }
  //     });
  //   }
  // }

  // public onContentDelete(data: any, type: any) {
  //   if (window.confirm('삭제 하시겠습니까?')) {
  //     if (type === 'THREE') {
  //       this.common.httpCallDelete('service/three/' + data.idx, data).subscribe((res: any) => {
  //         if (res.resultCode === 'OK') {
  //           this.getThreeList();
  //         }
  //       });
  //     } else if (type === 'TWO') {
  //       this.common.httpCallDelete('service/twice/' + data.idx, data).subscribe((res: any) => {
  //         if (res.resultCode === 'OK') {
  //           this.getTwoList();
  //         }
  //       });
  //     }
  //   }
  // }
}
