import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  public data: any;
  public fields: any = [
    { title: 'Index', width: 10, field: 'idx' },
    { title: 'Scheduler Name', width: 20, field: 'name' },
    { title: 'Trigger Index', width: 30, field: 'triggerIdx' },
    { title: 'Job Index', width: 20, field: 'jobIdx' },
    { title: 'Ins Date', width: 20, field: 'insertDate' },
  ];

  public creForm = new FormGroup({
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    triggerIdx: new FormControl({ value: '', disabled: true }, Validators.required),
    jobIdx: new FormControl({ value: '', disabled: true }, Validators.required),
  });

  public upForm = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }),
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    triggerIdx: new FormControl({ value: '', disabled: true }, Validators.required),
    jobIdx: new FormControl({ value: '', disabled: true }, Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }),
  });

  public jobData: any;
  public triggerData: any;

  constructor(private common: CommonHttpService, private formservice: FormsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.onSearchScheduler();
  }

  public onSearchScheduler() {
    this.common.httpCallGet('batch/service/scheduler').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
      }
    });

    this.common.httpCallGet('batch/service/job').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.jobData = res.result;
      }
    });

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
        this.onClose();
      }
    });
  }

  public onCreate(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPost('batch/service/scheduler', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
      }
    });
  }

  public onUpdate(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('batch/service/scheduler', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
      }
    });
  }

  public selectChange(e: any) {
    // this.form.controls.roleTitle.setValue(e.options[e.options.selectedIndex].label);
    // this.form.controls.roleIdx.setValue(e.options[e.options.selectedIndex].value);
  }

}
