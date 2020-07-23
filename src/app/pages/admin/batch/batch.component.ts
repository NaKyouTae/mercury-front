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

  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    this.onSearchScheduler();
  }

  public onSearchScheduler() {}

  public onSearchTrigger() {}

  public onSearchJob() {}
}
