import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public subCheck: any = false;
  public user: any = this.jwt.getJWTAccessKey('user');
  constructor(private common: CommonHttpService, private jwt: JwtService) { }

  ngOnInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/newsletters' + this.user.username, this.user.username).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.subCheck = true;
      }
    });
  }

  public onSubscription() {
    const params = {
      userIdx: this.user.idx,
      userName: this.user.username,
      userEMail: this.user.email
    };

    this.common.httpCallPost('service/newsletters', params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.subCheck = true;
      }
    });
  }
}
