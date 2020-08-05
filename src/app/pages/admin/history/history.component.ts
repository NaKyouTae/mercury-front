import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { ModalService } from 'src/app/shared/ui/modal/modal.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  public data: any;
  public fields: any;
  public form = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }, Validators.required),
    accessDate: new FormControl({ value: '', disabled: true }, Validators.required),
    browser: new FormControl({ value: '', disabled: true }, Validators.required),
    userName: new FormControl({ value: '', disabled: true }, Validators.required),
    userIdx: new FormControl({ value: '', disabled: true }, Validators.required),
  });

  constructor(private common: CommonHttpService, private formservice: FormsService, private modal: ModalService) { }

  ngOnInit() {
    this.onSearchLoginHistory();
  }

  public onSearchLoginHistory() {
    this.common.httpCallGet('service/historys/logins').subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.fields = [
          { title: '사용자 명', width: 10, field: 'userName' },
          { title: '접속 일자', width: 20, field: 'accessDate' },
          { title: '브라우저', width: 50, field: 'browser' },
          { title: '사용자 일렬번호', width: 10, field: 'userIdx' },
          { title: '일렬번호', width: 10, field: 'idx' },
        ];
        this.data = res.result;
      }
    });
  }

  public onSearchSchedule() {
    this.common.httpCallGet('batch/service/history').subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.fields = [
          { title: 'Cron', width: 10, field: 'cron' },
          { title: 'Job Name', width: 10, field: 'jobName' },
          { title: 'Message', width: 10, field: 'message' },
          { title: 'Schedule Name', width: 10, field: 'scheduleName' },
          { title: 'Start Date', width: 10, field: 'startDate' },
          { title: 'Trigger Name', width: 10, field: 'triggerName' },
          { title: 'Type', width: 10, field: 'type' },
          { title: 'INDEX', width: 10, field: 'Idx' },
        ];
        this.data = res.result;
      }
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose() {
    this.modal.onCloseAll();
  }

  public onDelete(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallDelete('service/roles/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
        this.onSearchLoginHistory();
      }
    });
  }
}
