import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormsService } from 'src/app/shared/util/forms.service';
import { CustomAlertService } from 'src/app/shared/ui/alert/custom-alert.service';

@Component({
  selector: 'app-mileage',
  templateUrl: './mileage.component.html',
  styleUrls: ['./mileage.component.css'],
})
export class MileageComponent implements OnInit {
  public type: any = true;

  public data: any;
  public fields: any = [
    { title: '요청 자', width: 10, field: 'userName', type: 'string' },
    { title: '요청 일자', width: 15, field: 'withDrawDate', type: 'date' },
    { title: '요청 금액', width: 10, field: 'withDrawMileage', type: 'number' },
    { title: '은행 명', width: 15, field: 'bank', type: 'string' },
    { title: '계좌 번호', width: 15, field: 'account', type: 'string' },
    { title: '이전 금액', width: 10, field: 'prevMileage', type: 'number' },
    { title: '승인 여부', width: 10, field: 'approval', type: 'boolean' },
    { title: '지급 일', width: 15, field: 'paymentDate', type: 'date' },
  ];

  public form = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }),
    userName: new FormControl({ value: '', disabled: true }),
    withDrawDate: new FormControl({ value: '', disabled: true }),
    paymentDate: new FormControl({ value: '', disabled: true }),
    content: new FormControl({ value: '', disabled: true }),
    prevMileage: new FormControl({ value: '', disabled: true }),
    withDrawMileage: new FormControl({ value: '', disabled: true }),
    afterMileage: new FormControl({ value: '', disabled: true }),
    approval: new FormControl({ value: '', disabled: true }),
  });

  constructor(private common: CommonHttpService, private dialog: MatDialog, private formservice: FormsService, private alertService: CustomAlertService) {}

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
    this.common.httpCallGet('service/mileagerequest').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
      }
    });
  }

  public onApproval(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('service/mileagerequest/approval/' + data.idx).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.onInit();
        this.onClose();
        this.alertService.showAlert('success', res.message);
      }
    });
  }
}
