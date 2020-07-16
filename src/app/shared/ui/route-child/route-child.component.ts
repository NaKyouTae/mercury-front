import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService } from '../../common/http/common-http.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nkt-route-child',
  templateUrl: './route-child.component.html',
  styleUrls: ['./route-child.component.css'],
})
export class RouteChildComponent implements OnInit {
  @Input() public data: any;
  constructor(private common: CommonHttpService) { }

  ngOnInit() { }

  public search(e: any) {
    const params = {
      pidx: e === null ? 'null' : e.idx,
    };

    let children = new Array();

    this.common.httpCallGet('service/menu/levels', params).subscribe((res: any) => {
      children = res.result;
      e.children = children;
    });
  }

  public onChildMenu(menu: any) {
    this.search(menu);

    const child = document.querySelector('#' + menu.menugroup) as HTMLElement;
    if (child.style.display === 'none') {
      child.style.display = 'block';
    } else if (child.style.display === 'block') {
      child.style.display = 'none';
    }
  }
}
