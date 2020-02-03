import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  private interval:any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.router.navigateByUrl('/layout/three')
    }, 500)
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
