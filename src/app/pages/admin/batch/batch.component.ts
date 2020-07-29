import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/util/forms.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css'],
})
export class BatchComponent implements OnInit {
  public data: any;
  public fields: any;
  public formCheck: any;
  public form: any;
  public schedulerForm = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }, Validators.required),
    name: new FormControl({ value: '', disabled: true }, Validators.required),
    triggerIdx: new FormControl({ value: '', disabled: true }, Validators.required),
    jobIdx: new FormControl({ value: '', disabled: true }, Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }, Validators.required),
  });

  public triggerForm = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }, Validators.required),
    cron: new FormControl({ value: '', disabled: true }, Validators.required),
    name: new FormControl({ value: '', disabled: true }, Validators.required),
    title: new FormControl({ value: '', disabled: true }, Validators.required),
    description: new FormControl({ value: '', disabled: true }, Validators.required),
    jobTitle: new FormControl({ value: '', disabled: true }, Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }, Validators.required),
  });

  public jobForm = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }, Validators.required),
    name: new FormControl({ value: '', disabled: true }, Validators.required),
    title: new FormControl({ value: '', disabled: true }, Validators.required),
    description: new FormControl({ value: '', disabled: true }, Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }, Validators.required),
  });

  constructor(private common: CommonHttpService, private formservice: FormsService) { }

  ngOnInit() {
    this.onSearchScheduler();
  }

  public onSearchScheduler() {
    this.common.httpCallGet('batch/service/scheduler').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.fields = [
          { title: 'Index', width: 10, field: 'idx' },
          { title: 'Scheduler Name', width: 20, field: 'name' },
          { title: 'Trigger Index', width: 30, field: 'triggerIdx' },
          { title: 'Job Index', width: 20, field: 'jobIdx' },
          { title: 'Ins Date', width: 20, field: 'insertDate' },
        ];
        this.data = res.result;
        this.formCheck = 'scheduler';
      }
    });
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
        this.formCheck = 'trigger';
      }
    });
  }

  public onSearchJob() {
    this.common.httpCallGet('batch/service/job').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.fields = [
          { title: 'Index', width: 10, field: 'idx' },
          { title: 'Job Name', width: 20, field: 'name' },
          { title: 'Job Title', width: 20, field: 'title' },
          { title: 'Class Name', width: 30, field: 'clasz' },
          { title: 'Desc', width: 20, field: 'description' },
          { title: 'Ins Date', width: 20, field: 'insertDate' },
        ];
        this.data = res.result;
        this.formCheck = 'job';
      }
    });
  }

  public onDblClick(data: any) {
    if (this.formCheck === 'scheduler') {
      this.form = this.schedulerForm;
    } else if (this.formCheck === 'trigger') {
      this.form = this.triggerForm;
    } else if (this.formCheck === 'job') {
      this.form = this.jobForm;
    }
    this.form.patchValue(data);
  }

  public onClose(template: any) {
    template.style.display = 'none';
  }

  public onDelete(e: any, template: any) {
    template.style.display = 'none';

    const data: any = this.formservice.formToData(e);

    this.common.httpCallDelete('batch/service/' + this.formCheck, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
      }
    });
  }

  public onCreate(e: any, template: any) {
    template.style.display = 'none';

    const data: any = this.formservice.formToData(e);

    this.common.httpCallPost('batch/service/' + this.formCheck, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
      }
    });
  }
}
