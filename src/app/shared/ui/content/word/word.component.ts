import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('words') public words: any;
  // tslint:disable-next-line: no-input-rename
  @Input('description') public description: any;

  constructor() {}

  ngOnInit() {}
}
