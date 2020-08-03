import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-sx',
  templateUrl: './logo-sx.component.html',
  styleUrls: ['./logo-sx.component.css'],
})
export class LogoSxComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('refresh') public used: boolean;

  constructor(private router: Router) {}

  ngOnInit() {}

  public onClick() {
    this.router.navigateByUrl('/three');
  }
}
