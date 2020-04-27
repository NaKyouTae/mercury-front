import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userCheck: any = this.jwt.getJWTAccessKey('username') !== null ? true : false;

  constructor(private router: Router, private jwt: JwtService) { }

  ngOnInit() { }

  onClick() {
    this.router.navigateByUrl('/three');
  }
}
