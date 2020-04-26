import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { UserContentsComponent } from '../user-contents/user-contents.component';
import { ObservableService } from 'src/app/shared/common/observable/observable.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { CookieService } from 'src/app/shared/common/cookies.service';

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

  public userCheck: any = this.cookie.getCookie('user') !== null ? true : false;

  constructor(private common: CommonHttpService, private observable: ObservableService, private cookie: CookieService) {
    this.observable.sourceObv.subscribe((res: any) => {
      if (res === 'THREE') {
        this.getThreeList();
      } else if (res === 'TWO') {
        this.getTwoList();
      }
    });
  }

  ngOnInit() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    this.checkLove();
  }
  getThreeList() {
    this.common.httpCallGet('service/three/lists').subscribe((res: any) => {
      this.datas = res.result;
      this.checkLove();
    });
  }
  getTwoList() {
    this.common.httpCallGet('service/two/lists').subscribe((res: any) => {
      this.datas = res.result;
    });
  }

  upLove(e: any) {
    e.point = e.point + 1;
    e.love = true;
    this.common.httpCallPut('service/three/threes/' + e.idx, e).subscribe((res: any) => {
      this.getThreeList();
    });
  }

  checkLove() {
    this.datas.forEach((item: any) => {
      this.common.httpCallGet('service/loves', { idx: this.cookie.getCookie('user') }).subscribe((res: any) => {
        if (res.result !== false) {
          item.me = true;
        } else {
          item.me = false;
        }
      });
    });
  }
}
