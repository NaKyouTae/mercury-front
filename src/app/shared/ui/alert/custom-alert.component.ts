import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css'],
})
export class CustomAlertComponent implements OnInit {
  public type: any;
  public title: any;
  public content: any;

  constructor() {}

  ngOnInit(): void {}
}
