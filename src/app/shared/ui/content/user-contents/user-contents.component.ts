import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-contents',
  templateUrl: './user-contents.component.html',
  styleUrls: ['./user-contents.component.css']
})
export class UserContentsComponent implements OnInit {
  @Input('contents') public contents: any;
  constructor() {}

  ngOnInit() {}
}
