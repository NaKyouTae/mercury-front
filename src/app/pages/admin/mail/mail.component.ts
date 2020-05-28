import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
})
export class MailComponent implements OnInit {
  public port: any;
  public email: any;
  public htmlContent: any;

  constructor() { }

  ngOnInit() { }
}
