import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';

@Component({
  selector: 'app-honor',
  templateUrl: './honor.component.html',
  styleUrls: ['./honor.component.css'],
})
export class HonorComponent implements OnInit {
  public nowData: any;
  public boardData: any;

  constructor(private common: CommonHttpService) { }

  ngOnInit() {
    this.onInit();
  }

  public onInit() {
    this.nowHonor(new Date().getFullYear(), new Date().getMonth());
    this.honorBoard(new Date().getFullYear() - 1, new Date().getMonth() - 1);
  }

  public nowHonor(year: number, month: number) {
    this.common.httpCallGet('service/honor/date', { year, month }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.nowData = res.result.honors;
      }
    });
  }

  public honorBoard(year: number, month: number) {
    this.common.httpCallGet('service/honor/date', { year, month }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.boardData = res.result.honors;
      }
    });
  }
}
