import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';

@Component({
  selector: 'app-honor-grid',
  templateUrl: './honor-grid.component.html',
  styleUrls: ['./honor-grid.component.css'],
})
export class HonorGridComponent implements OnInit {
  @Input() public data: any;
  @Input() public year: any;
  @Input() public month: any;
  @Input() public detailTemplate?: TemplateRef<any>;

  @Output() dbldata: EventEmitter<any> = new EventEmitter<any>();

  constructor(private common: CommonHttpService) {}

  ngOnInit(): void {}

  public onDblClick(value: any) {
    this.dbldata.emit(value);
  }

  public clickValue(year: any, month: any) {
    year = Number(year.title.slice(0, year.title.length - 1));
    month = Number(month.title.slice(0, month.title.length - 1));

    this.common.httpCallGet('service/honor/date', { year, month }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        const result = res.result.root;

        if (new Date().getFullYear() === year && new Date().getMonth() + 1 === month) {
          this.data = result.slice(1, result.length);
        } else {
          this.data = result;
        }
      }
    });
  }
}
