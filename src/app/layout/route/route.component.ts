import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  public routeLinks;
  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.common.httpCallGet('service/menu/routes').subscribe((res: any) => {
      this.routeLinks = res.result;
    });
  }

  onChildMenu(menu: string) {
    const child = document.querySelector('#' + menu) as HTMLElement;
    if (child.style.display === 'none') {
      child.style.display = 'block';
    } else if (child.style.display === 'block') {
      child.style.display = 'none';
    }
  }
}
