import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';

@Component({
  selector: 'app-honor',
  templateUrl: './honor.component.html',
  styleUrls: ['./honor.component.css']
})
export class HonorComponent implements OnInit {

  public datas: any;

  constructor(private common: CommonHttpService) { }

  ngOnInit() {
    this.onInit();
  }

  public onInit() {
    this.common.httpCallGet('service/honor').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.datas = res.result;
      }
    });
  }
}
