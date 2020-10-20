import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';

@Component({
  selector: 'app-honor',
  templateUrl: './honor.component.html',
  styleUrls: ['./honor.component.css'],
})
export class HonorComponent implements OnInit {
  public latestData: any;
  public boardData: any;
  public yearData: any;
  public monthData: any;

  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    this.onInit();
  }

  public onInit() {
    this.nowHonor(new Date().getFullYear(), new Date().getMonth() + 1);
    this.seHonorDate();
  }

  public nowHonor(year: number, month: number) {
    this.common.httpCallGet('service/honor/date', { year, month }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        const result = res.result.root;

        this.latestData = result[0];
        this.boardData = result.slice(1, result.length);
      }
    });
  }

  public seHonorDate() {
    this.common.httpCallGet('service/honor/year').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.yearData = res.result;
      }
    });
    this.common.httpCallGet('service/honor/month').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.monthData = res.result;
      }
    });
  }
}
