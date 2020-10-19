import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-honor-grid',
  templateUrl: './honor-grid.component.html',
  styleUrls: ['./honor-grid.component.css'],
})
export class HonorGridComponent implements OnInit {
  @Input() public data: any;
  @Input() public detailTemplate?: TemplateRef<any>;

  @Output() dbldata: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  public onDblClick(value: any) {
    this.dbldata.emit(value);
  }

  public clickValue(e: any) {

  }
}
