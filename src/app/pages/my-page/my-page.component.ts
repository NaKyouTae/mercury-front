import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  public userRoles: any = this.jwt.getJWTAccessKey('roles') === null ? [] : this.jwt.getJWTAccessKey('roles');
  public routeLinks: any;

  constructor(private common: CommonHttpService, private jwt: JwtService) { }

  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/mymenus/levels', { pidx: null }).subscribe((res: any) => {
      this.routeLinks = res.result;
    });
  }

  public onChildMenu(menu: any) {
    const params = {
      pidx: menu.idx,
    };

    let children = new Array();

    this.common.httpCallGet('service/mymenus/levels', params).subscribe((res: any) => {
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
