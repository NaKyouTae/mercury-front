import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-honor-grid',
  templateUrl: './honor-grid.component.html',
  styleUrls: ['./honor-grid.component.css'],
})
export class HonorGridComponent implements OnInit {
  @Input() public data: any;
  @Input() public detailTemplate?: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void { }
}
