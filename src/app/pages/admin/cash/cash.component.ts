import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormsService } from 'src/app/shared/util/forms.service';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css'],
})
export class CashComponent implements OnInit {
  public type: any = true;

  public data: any;
  public fields: any = [
    { title: '요청 자', width: 10, field: 'userName', type: 'string' },
    { title: '요청 일자', width: 15, field: 'withDrawDate', type: 'date' },
    { title: '요청 금액', width: 10, field: 'withDrawCash', type: 'number' },
    { title: '은행 명', width: 15, field: 'bank', type: 'string' },
    { title: '계좌 번호', width: 15, field: 'account', type: 'string' },
    { title: '이전 금액', width: 10, field: 'prevCash', type: 'number' },
    { title: '승인 여부', width: 10, field: 'approval', type: 'boolean' },
    { title: '지급 일', width: 15, field: 'paymentDate', type: 'date' },
  ];

  public form = new FormGroup({
    idx: new FormControl(''),
    userName: new FormControl(''),
    withDrawDate: new FormControl(''),
    paymentDate: new FormControl(''),
    content: new FormControl(''),
    prevCash: new FormControl(''),
    withDrawCash: new FormControl(''),
    afterCash: new FormControl(''),
    approval: new FormControl(''),
  });

  constructor(private common: CommonHttpService, private dialog: MatDialog, private formservice: FormsService) {}

  ngOnInit() {
    this.onInit();
  }

  public onInit() {
    this.onSearch();
  }

  public onClose() {
    this.dialog.closeAll();
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onSearch() {
    this.common.httpCallGet('service/cashrequest').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
      }
    });
  }

  public onApproval(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('service/cashrequest/approval/' + data.idx).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        alert(res.message);
        this.onInit();
        this.onClose();
      }
    });
  }
}
