import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public data: any;
  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.common.httpCallGet('service/user/lists').subscribe((res: any) => {
      this.data = res.result;
    });
  }
}
