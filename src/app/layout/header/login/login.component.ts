import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonHttpService } from 'src/app/common/common-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private common: CommonHttpService,
    private router: Router
  ) {}

  ngOnInit() {}

  public username: string;
  public password: string;

  onClick(template: TemplateRef<any>) {
    const dialogData = {
      username: this.username,
      pw: this.password
    };

    this.dialog.open(template, {
      width: '400px',
      height: '250px',
      data: dialogData
    });
  }

  login() {

    const data = {
      username: encodeURI(this.username),
      password: encodeURI(this.password)
    };

    this.common.httpCallPost('user/login', data).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/layout/three');
    });
  }
}
