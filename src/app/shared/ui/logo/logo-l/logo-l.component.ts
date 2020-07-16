import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-l',
  templateUrl: './logo-l.component.html',
  styleUrls: ['./logo-l.component.css']
})
export class LogoLComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onClick() {
    this.router.navigateByUrl('/three');
  }
}
