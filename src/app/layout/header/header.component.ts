import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/shared/common/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userCheck: any = this.cookie.getCookie('user') !== null ? true : false;

  constructor(private router: Router, private cookie: CookieService) { }

  ngOnInit() { }

  onClick() {
    this.router.navigateByUrl('/three');
  }
}
