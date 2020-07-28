import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css'],
})
export class BatchComponent implements OnInit {
  public data: any;
  public fields: any;

  constructor(private common: CommonHttpService) { }

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
          { title: 'Ins\' Date', width: 20, field: 'insertDate' },
        ];
        this.data = res.result;
      }
    });
  }

  public onSearchTrigger() {
    this.common.httpCallGet('batch/service/trigger').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
        this.fields = [
          { title: 'Index', width: 10, field: 'idx' },
          { title: 'Cron', width: 30, field: 'cron' },
          { title: 'Trigger Name', width: 20, field: 'name' },
          { title: 'Trigger Title', width: 20, field: 'title' },
          { title: 'Desc', width: 20, field: 'description' },
          { title: 'Job Name', width: 20, field: 'jobTitle' },
          { title: 'Ins\' Date', width: 20, field: 'insertDate' },
        ];
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
          { title: 'Ins\' Date', width: 20, field: 'insertDate' },
        ];
        this.data = res.result;
      }
    });
  }
}
