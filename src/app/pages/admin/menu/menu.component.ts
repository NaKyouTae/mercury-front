import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public data: any;
  public type: any;
  constructor(private common: CommonHttpService) { }

  ngOnInit() {
    this.onSearch('menus');
  }

  public onSearch(type: any) {
    const params = {
      pidx: 'null',
    };
    this.common.httpCallGet('service/' + type + '/levels', params).subscribe((res: any) => {
      this.data = res.result;
      this.type = type;
    });
  }
}
