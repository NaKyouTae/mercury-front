import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/shared/common/cookie/cookies.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public userCheck: any = this.jwt.getJWTAccessKey('sub') !== null ? true : false;

  constructor(private router: Router, private jwt: JwtService) { }

  ngOnInit() {
    console.log(this.jwt.getJWTAccessKey('sub'));
  }

  onClick() {
    this.router.navigateByUrl('/three');
  }
}
