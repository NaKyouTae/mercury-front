import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css'],
})
export class GradeComponent implements OnInit {
  public data: any;

  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/grades').subscribe((res: any) => {
      this.data = res.result;
    });
  }
}
