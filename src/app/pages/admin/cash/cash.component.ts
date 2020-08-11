import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css'],
})
export class CashComponent implements OnInit {
  public type: any = '신청';

  public data: any;
  public fields: any = [
    { title: '요청 자', width: 15, field: 'userName' },
    { title: '요청 일자', width: 15, field: 'withDrawDate' },
    { title: '지급 일', width: 15, field: 'paymentDate' },
    { title: '지급 내용', width: 20, field: 'content' },
    { title: '이전 금액', width: 10, field: 'prevCash' },
    { title: '요청 금액', width: 10, field: 'withDrawCash' },
    { title: '잔액', width: 10, field: 'afterCash' },
    { title: '승인', width: 5, field: 'approval' },
  ];

  public form = new FormGroup({
    userName: new FormControl(''),
    withDrawDate: new FormControl(''),
    paymentDate: new FormControl(''),
    content: new FormControl(''),
    prevCash: new FormControl(''),
    withDrawCash: new FormControl(''),
    afterCash: new FormControl(''),
    approval: new FormControl(''),
  });


  constructor(private common: CommonHttpService) { }

  ngOnInit() { }

  public onSearch() {
    this.common.httpCallGet('service/cash/approvals', this.type).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
      }
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }
}
