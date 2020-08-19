import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.css']
})
export class TriggerComponent implements OnInit {
  public data: any;
  public fields: any = [
    { title: 'Index', width: 10, field: 'idx' },
    { title: 'Cron', width: 30, field: 'cron' },
    { title: 'Trigger Name', width: 20, field: 'name' },
    { title: 'Trigger Title', width: 30, field: 'title' },
    { title: 'Desc', width: 20, field: 'description' },
    { title: 'Job Idx', width: 20, field: 'jobIdx' },
    { title: 'Ins Date', width: 20, field: 'insertDate' },
  ];

  public creForm = new FormGroup({
    cron: new FormControl({ value: '', disabled: false }, Validators.required),
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    title: new FormControl({ value: '', disabled: false }, Validators.required),
    description: new FormControl({ value: '', disabled: false }, Validators.required),
    jobIdx: new FormControl({ value: '', disabled: false }, Validators.required),
  });

  public upForm = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }),
    cron: new FormControl({ value: '', disabled: false }, Validators.required),
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    title: new FormControl({ value: '', disabled: false }, Validators.required),
    description: new FormControl({ value: '', disabled: false }, Validators.required),
    jobIdx: new FormControl({ value: '', disabled: false }, Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }),
  });

  public jobData: any;

  constructor(private common: CommonHttpService, private formservice: FormsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.onInit();
  }

  public onInit() {
    this.onSearchTrigger();
    this.onSearchJob();
  }

  public onSearchJob() {
    this.common.httpCallGet('batch/service/job').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.jobData = res.result;
      }
    });

  }

  public onSearchTrigger() {
    this.common.httpCallGet('batch/service/trigger').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
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

    this.common.httpCallDelete('batch/service/trigger', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onInit();
        this.onClose();
      }
    });
  }

  public onCreate(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPost('batch/service/trigger', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onInit();
        this.onClose();
      }
    });
  }

  public onUpdate(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('batch/service/trigger', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onInit();
        this.onClose();
      }
    });
  }

  public selectChange(e: any, type: string) {
    if (type === 'create') {
      this.creForm.controls.jobIdx.setValue(e.options[e.options.selectedIndex].value);
    } else {
      this.upForm.controls.jobIdx.setValue(e.options[e.options.selectedIndex].value);
    }
  }
}
