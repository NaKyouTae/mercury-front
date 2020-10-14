import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { MatDialog } from '@angular/material/dialog';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertComponent } from 'src/app/shared/ui/alert/alert.component';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
})
export class SchedulerComponent implements OnInit {
  public data: any;
  public fields: any = [
    { title: 'Index', width: 10, field: 'idx', type: 'string' },
    { title: 'Scheduler Name', width: 20, field: 'name', type: 'string' },
    { title: 'Trigger Index', width: 30, field: 'triggerIdx', type: 'string' },
    { title: 'Job Index', width: 20, field: 'jobIdx', type: 'string' },
    { title: 'Ins Date', width: 20, field: 'insertDate', type: 'date' },
  ];

  public creForm = new FormGroup({
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    triggerIdx: new FormControl({ value: '', disabled: false }, Validators.required),
    jobIdx: new FormControl({ value: '', disabled: false }, Validators.required),
  });

  public upForm = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }),
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    triggerIdx: new FormControl({ value: '', disabled: false }, Validators.required),
    jobIdx: new FormControl({ value: '', disabled: false }, Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }),
  });

  public jobData: any;
  public triggerData: any;

  public interval: any;

  constructor(
    private common: CommonHttpService,
    private formservice: FormsService,
    private dialog: MatDialog,
    private alertService: AlertComponent) { }

  ngOnInit() {
    this.onInit();
  }

  public onInit() {
    // Schedule 목록 조회
    this.common.httpCallGet('batch/service/scheduler').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
      }
    });

    // Job 목록 조회
    this.common.httpCallGet('batch/service/job').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.jobData = res.result;
      }
    });

    // Trigger 목록 조회
    this.common.httpCallGet('batch/service/trigger').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.triggerData = res.result;
      }
    });
  }

  public onDblClick(data: any) {
    this.upForm.patchValue(data);
  }

  public onClose() {
    this.dialog.closeAll();
  }

  public onDelete(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallDelete('batch/service/scheduler', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onInit();
        this.onClose();
      }
    });
  }

  public onCreate(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPost('batch/service/scheduler', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onInit();
        this.onClose();
      }
    });
  }

  public onUpdate(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('batch/service/scheduler', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onInit();
        this.onClose();
      }
    });
  }

  public selectJobChange(e: any, type: string) {
    if (type === 'create') {
      this.creForm.controls.jobIdx.setValue(e.options[e.options.selectedIndex].value);
    } else {
      this.upForm.controls.jobIdx.setValue(e.options[e.options.selectedIndex].value);
    }
  }

  public selectTriggerChange(e: any, type: string) {
    if (type === 'create') {
      this.creForm.controls.triggerIdx.setValue(e.options[e.options.selectedIndex].value);
    } else {
      this.upForm.controls.triggerIdx.setValue(e.options[e.options.selectedIndex].value);
    }
  }

  public onStart(e: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallGet('batch/service/scheduler/start', { idx: data.idx }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.alertService.showAlert('success', res.message);
      }
    });
  }
  public onStop(e: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallDelete('batch/service/scheduler/stop', { jobIdx: data.jobIdx }).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.alertService.showAlert('success', res.message);
      }
    });
  }


}
