import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsService } from '../../util/forms.service';
import { CommonHttpService } from '../../common/common-http.service';

@Component({
  selector: 'nkt-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class CustomGridComponent implements OnInit {
  @Input() data: any;
  @Input() modalTemp?: any;
  @Input() gridWidth?: string;

  @Output() dbldata: EventEmitter<any> = new EventEmitter<any>();

  public fields: any;
  public fieldsNum: any;
  public sizeList: any = [10, 20, 30, 40, 50, 100, 200];
  public size = 30;
  public skip = 0;
  public take = 30;
  public tot;
  public nowPage;
  public dataCountStart = 1;
  public dataCountEnd = this.take;
  public pageList: Array<any>;

  constructor(private _forms: FormsService, private common: CommonHttpService) { }

  ngOnInit() {
    if (this.data !== undefined) {
      this.fields = Object.keys(this.data[0]);
      this.fieldsNum = this.fields.length;
      this.tot = this.data.length;
      this.pageList = new Array(Math.ceil(this.data.length / this.take < 1 ? 1 : this.data.length / this.take));
      this.take = this.data.length > this.take ? this.take : this.data.length;
    }
  }

  onFields(data: any) {
    return Object.keys(data);
  }

  onData(data, field) {
    // tslint:disable-next-line: no-eval
    return eval('data.' + field);
  }

  onBind(e: any) {
    const result = new Array();

    const dataList = this.data.slice(this.skip, this.take);

    for (let d of dataList) {
      Object.keys(d).forEach((v) => {
        if (e === v) {
          result.push(d[v]);
        }
      });
    }

    return result;
  }

  paging(e) {
    this.skip = e === 1 ? 0 : Number(this.size) * (Number(e) - 1);
    this.take = Math.ceil(this.data.length / this.size) === e ? this.data.length : Number(this.size) * Number(e);
  }

  reSize(e) {
    this.size = e;
    this.pageList = new Array(Math.ceil(this.data.length / this.size < 1 ? 1 : this.data.length / this.size));
    this.paging(this.nowPage === undefined ? 1 : this.nowPage);
  }

  chagnePageListColor(e) {
    for (let i = 1; i <= this.pageList.length; i++) {
      const page = document.querySelector('.pageCount_' + i.toString()) as HTMLElement;

      if (page.style.backgroundColor === 'rgb(229, 229, 229)') {
        page.style.backgroundColor = 'white';
      }
    }

    const newPage = document.querySelector('.pageCount_' + e) as HTMLElement;

    newPage.style.backgroundColor = '#e5e5e5';
  }

  getNowPage() {
    for (let i = 1; i <= this.pageList.length; i++) {
      const page = document.querySelector('.pageCount_' + i.toString()) as HTMLElement;
      if (page.style.backgroundColor === 'rgb(229, 229, 229)') {
        return i;
      }
    }
  }

  changePage(e) {
    this.nowPage = e;
    this.chagnePageListColor(e);
    this.paging(this.nowPage === undefined ? 1 : this.nowPage);
  }
  firstPage() {
    if (this.getNowPage() !== 1) {
      this.chagnePageListColor(1);
      this.paging(1);
    } else {
      event.preventDefault;
    }
  }
  prevPage() {
    const prev = this.getNowPage();
    if (prev !== 1) {
      this.chagnePageListColor(prev - 1);
      this.paging(prev - 1);
    } else {
      event.preventDefault;
    }
  }
  nextPage() {
    const next = this.getNowPage();
    if (next !== this.pageList.length) {
      this.chagnePageListColor(next + 1);
      this.paging(next + 1);
    } else {
      event.preventDefault();
    }
  }
  endPage() {
    if (this.getNowPage() !== this.pageList.length) {
      this.chagnePageListColor(this.pageList.length);
      this.paging(this.pageList.length);
    } else {
      event.preventDefault;
    }
  }
  onDblClick(value: any) {
    this.dbldata.emit(value);
  }
}
