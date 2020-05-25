import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/shared/util/forms.service';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cash-request',
  templateUrl: './cash-request.component.html',
  styleUrls: ['./cash-request.component.css']
})
export class CashRequestComponent implements OnInit {
  public userName: any = this.jwt.getJWTAccessKey('user') === undefined ? null : this.jwt.getJWTAccessKey('user').userName;
  public prevCash: any;
  public form = new FormGroup({
    userName: new FormControl('', Validators.required),
    widthDrawCash: new FormControl('', Validators.required)
  });
  constructor(private common: CommonHttpService, private formservice: FormsService, private jwt: JwtService) { }

  ngOnInit() {
    this.onSearch();
  }

  public onSearch(e?: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallGet('service/cashs/' + data.idx, { idx: data.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.prevCash = res.result.prevCash;
      }
    });
  }

  public onRequest(e: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallPost('service/cashs', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        alert(res.message);
      }
    });
  }
}
