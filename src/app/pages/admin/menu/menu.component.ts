import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public data: any;
  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    const params = {
      pidx: ''
    };
    this.common.httpCallGet('service/menu/levels', params).subscribe((res: any) => {
      this.data = res.result;
    });
  }
}
