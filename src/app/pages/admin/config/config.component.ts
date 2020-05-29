import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  public data: any;
  constructor(private common: CommonHttpService) { }

  ngOnInit() {
  }

  public onSearch() {
    this.common.httpCallGet('service/config').subscribe((res: any) => {
      this.data = res.result;
    })
  }

}
