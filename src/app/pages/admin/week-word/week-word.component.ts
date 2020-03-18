import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-week-word',
  templateUrl: './week-word.component.html',
  styleUrls: ['./week-word.component.css']
})
export class WeekWordComponent implements OnInit {
  public data: any;
  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/three/lists').subscribe((res: any) => {
      this.data = res.result;
      console.log(res);
    });
  }
}
