import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  public routeLinks = [
    { id: 'three', url: 'three', title: '삼행시', children: [] },
    { id: 'twp', url: 'two', title: '이행시', children: [] },
    { id: 'honor', url: 'honor', title: '명예의 전당', children: [] },
    { id: 'notice', url: 'notice', title: '공지사항', children: [] },
    {
      id: 'admin',
      url: null,
      title: '관리자',
      children: [
        { id: 'menu', url: 'admin/menu', title: '메뉴', children: [] },
        { id: 'weekword', url: 'admin/weekword', title: '제시어', children: [] },
        { id: 'user', url: 'admin/user', title: '사용자', children: [] }
      ]
    }
  ];
  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.common.httpCallGet('service/menu/lists').subscribe((res: any) => {
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
