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
  public fields: any;

  public creForm = new FormGroup({
    cron: new FormControl({ value: '', disabled: false }, Validators.required),
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    title: new FormControl({ value: '', disabled: false }, Validators.required),
    description: new FormControl({ value: '', disabled: false }, Validators.required),
    jobTitle: new FormControl({ value: '', disabled: false }, Validators.required),
  });

  public upForm = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }),
    cron: new FormControl({ value: '', disabled: false }, Validators.required),
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    title: new FormControl({ value: '', disabled: false }, Validators.required),
    description: new FormControl({ value: '', disabled: false }, Validators.required),
    jobTitle: new FormControl({ value: '', disabled: false }, Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }),
  });

  constructor(private common: CommonHttpService, private formservice: FormsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.onSearchTrigger();
  }

  public onSearchTrigger() {
    this.common.httpCallGet('batch/service/trigger').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.fields = [
          { title: 'Index', width: 10, field: 'idx' },
          { title: 'Cron', width: 30, field: 'cron' },
          { title: 'Trigger Name', width: 20, field: 'name' },
          { title: 'Trigger Title', width: 30, field: 'title' },
          { title: 'Desc', width: 20, field: 'description' },
          { title: 'Job Name', width: 20, field: 'jobTitle' },
          { title: 'Ins Date', width: 20, field: 'insertDate' },
        ];
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
        this.onClose();
      }
    });
  }

  public onCreate(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPost('batch/service/trigger', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
      }
    });
  }

  public onUpdate(e: any, template: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('batch/service/trigger', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onClose();
      }
    });
  }
}
