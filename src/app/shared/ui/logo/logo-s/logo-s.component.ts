import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-s',
  templateUrl: './logo-s.component.html',
  styleUrls: ['./logo-s.component.css']
})
export class LogoSComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onClick() {
    this.router.navigateByUrl('/three');
  }

}
