import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { Store } from '@ngrx/store';
import { NewsLetterState } from 'src/app/core/store/common/common.model';
import { Subject } from 'rxjs';
import { inCommonNewsletter } from 'src/app/core/store/common/common.actions';
import { ObservableService } from 'src/app/shared/common/observable/observable.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public subCheck: any = true;
  public user: any = this.jwt.getJWTAccessKey('user');

  constructor(private common: CommonHttpService, private jwt: JwtService, private observable: ObservableService) { }

  ngOnInit() {
    this.onSearch();

    // newsletters check 여부
    this.observable.sourceObv.subscribe((res: any) => {
      alert('구독 : ' + res);
      this.subCheck = res;
    });
  }

  public onSearch() {
    const idx = this.user === null ? null : this.user.idx;

    this.common.httpCallGet('service/newsletters/users/idxs', { userIdx: idx }).subscribe((res: any) => {
      if (res.result !== null) {
        this.subCheck = false;
      }
    });
  }

  public onSubscription() {
    if (this.user === null) {
      alert('로그인을 해주세요.');
      return false;
    } else {
      const params = {
        userIdx: this.user.idx,
        userName: this.user.username,
        userEMail: this.user.email,
      };

      this.common.httpCallPost('service/newsletters', params).subscribe((res: any) => {
        if (res.resultCode === 'OK') {
          this.observable.checkNewsLetter(true);
          this.subCheck = false;
        }
      });
    }
  }
}
