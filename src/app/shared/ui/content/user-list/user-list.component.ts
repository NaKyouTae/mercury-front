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
  @Input('data') public datas: any = new Array(2);
  // tslint:disable-next-line: no-input-rename
  @Input('word') public words: any;
  // tslint:disable-next-line: no-input-rename
  @Input('type') public type: any;

  public userCheck: any = this.jwt.getJWTAccessKey('sub') !== null ? true : false;
  public userName: any = this.jwt.getJWTAccessKey('sub') !== null ? this.jwt.getJWTAccessKey('sub') : '';

  // tslint:disable-next-line: max-line-length
  constructor(private common: CommonHttpService, private observable: ObservableService, private jwt: JwtService) {
    this.observable.sourceObv.subscribe((res: any) => {
      if (res === 'THREE') {
        this.getThreeList();
      } else if (res === 'TWO') {
        this.getTwoList();
      }
    });
  }

  ngOnInit() {
    console.log(this.type);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    this.checkLove();
  }
  getThreeList() {
    this.common.httpCallGet('service/three').subscribe((res: any) => {
      this.datas = res.result;
      this.checkLove();
    });
  }
  getTwoList() {
    this.common.httpCallGet('service/twice').subscribe((res: any) => {
      this.datas = res.result;
      this.checkLove();
    });
  }

  upThreeLove(e: any) {
    e.point = e.point + 1;
    e.love = true;
    e.loveName = this.userName;
    this.common.httpCallPut('service/three/' + e.idx, e).subscribe((res: any) => {
      this.getThreeList();
    });
  }

  upTwoLove(e: any) {
    e.point = e.point + 1;
    e.love = true;
    e.loveName = this.userName;
    this.common.httpCallPut('service/twice/' + e.idx, e).subscribe((res: any) => {
      this.getTwoList();
    });
  }

  checkLove() {
    this.datas.forEach((item: any) => {
      this.common.httpCallGet('service/loves', { contentIdx: item.idx, username: this.userName }).subscribe((res: any) => {
        if (res.result !== false) {
          item.me = true;
        } else {
          item.me = false;
        }
      });
    });
  }

  orPopular(type: string) {
    if (type === 'THREE') {
      this.common.httpCallGet('service/three/popular').subscribe((res: any) => {
        this.datas = res.result;
        this.checkLove();
      });
    } else if (type === 'TWO') {
      this.common.httpCallGet('service/twice/popular').subscribe((res: any) => {
        this.datas = res.result;
        this.checkLove();
      });
    }
  }

  orLatest(type: string) {
    if (type === 'THREE') {
      this.getThreeList();
    } else if (type === 'TWO') {
      this.getTwoList();
    }
  }
}
