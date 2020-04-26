import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css'],
})
export class RouteComponent implements OnInit {
  public routeLinks;
  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    this.search(null);
  }

  search(e: any) {
    const params = {
      pidx: e === null ? 'null' : e,
    };
    this.common.httpCallGet('service/menu/levels', params).subscribe((res: any) => {
      this.routeLinks = res.result;
    });
  }

  onChildMenu(menu: any) {
    const params = {
      pidx: menu.idx,
    };

    let children = new Array();

    this.common.httpCallGet('service/menu/levels', params).subscribe((res: any) => {
      children = res.result;
      menu.children = children;
    });

    const child = document.querySelector('#' + menu.menuGroup) as HTMLElement;
    if (child.style.display === 'none') {
      child.style.display = 'block';
    } else if (child.style.display === 'block') {
      child.style.display = 'none';
    }
  }
}
