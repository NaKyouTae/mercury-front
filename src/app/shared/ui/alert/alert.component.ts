import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  public type: any;
  public title: any;
  public message: any;

  constructor() { }

  ngOnInit(): void {
  }

}
