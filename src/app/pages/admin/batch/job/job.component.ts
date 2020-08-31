import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  public data: any;
  public fields: any = [
    { title: 'Index', width: 10, field: 'idx', type: 'string' },
    { title: 'Execute', width: 20, field: 'execute', type: 'boolean' },
    { title: 'Job Name', width: 20, field: 'name', type: 'string' },
    { title: 'Job Title', width: 20, field: 'title', type: 'string' },
    { title: 'Class Name', width: 30, field: 'clasz', type: 'string' },
    { title: 'Desc', width: 20, field: 'description', type: 'string' },
    { title: 'Ins Date', width: 20, field: 'insertDate', type: 'date' },
  ];

  public creForm = new FormGroup({
    name: new FormControl({ value: '' }, Validators.required),
    title: new FormControl({ value: '' }, Validators.required),
    clasz: new FormControl({ value: '' }, Validators.required),
    execute: new FormControl({ value: true }, Validators.required),
    description: new FormControl({ value: '' }, Validators.required),
  });

  public upForm = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }),
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    title: new FormControl({ value: '', disabled: false }, Validators.required),
    clasz: new FormControl({ value: '', disabled: false }, Validators.required),
    execute: new FormControl({ value: '', disabled: false }, Validators.required),
    description: new FormControl({ value: '', disabled: false }, Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }),
  });

  constructor(private common: CommonHttpService, private formservice: FormsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.onInit();
  }

  public onInit() {
    this.onSearchJob();
  }

  public onSearchJob() {
    this.common.httpCallGet('batch/service/job').subscribe((res: any) => {
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

    this.common.httpCallDelete('batch/service/job', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onInit();
        this.onClose();
      }
    });
  }

  public onCreate(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPost('batch/service/job', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onInit();
        this.onClose();
      }
    });
  }

  public onUpdate(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('batch/service/job', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onInit();
        this.onClose();
      }
    });
  }
}
