import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-s',
  templateUrl: './logo-s.component.html',
  styleUrls: ['./logo-s.component.css'],
})
export class LogoSComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('refresh') public used: boolean;

  constructor(private router: Router) {}

  ngOnInit() {}

  public onClick() {
    this.router.navigateByUrl('/three');
  }
}
