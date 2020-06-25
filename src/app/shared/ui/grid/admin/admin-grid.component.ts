import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JwtService } from '../../../common/jwt/jwt.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nkt-admin-grid',
  templateUrl: './admin-grid.component.html',
  styleUrls: ['./admin-grid.component.css'],
})
export class AdminGridComponent implements OnInit {
  @Input() public data: any;
  @Input() public fields: any;
  @Input() public upModalTemp?: any;
  @Input() public creModalTemp?: any;
  @Input() public gridWidth?: string;
  @Input() public btnUse?: any;

  @Output() dbldata: EventEmitter<any> = new EventEmitter<any>();

  public fieldsNum: any;
  public sizeList: any = [10, 20, 30, 40, 50, 100, 200];
  public size: any = 30;
  public skip: any = 0;
  public take: any = 30;
  public tot: any;
  public nowPage: any;
  public dataCountStart: any = 1;
  public dataCountEnd: any = this.take;
  public pageList: Array<any>;
  public userRoles: any = this.jwt.getJWTUserKey('roles') === null ? [] : this.jwt.getJWTUserKey('roles');

  constructor(private jwt: JwtService) { }

  ngOnInit() {
    if (this.data !== undefined) {
      // this.fields = Object.keys(this.data[0]);
      this.fieldsNum = this.fields.length;
      this.tot = this.data.length;
      this.pageList = new Array(Math.ceil(this.data.length / this.take < 1 ? 1 : this.data.length / this.take));
      this.take = this.data.length > this.take ? this.take : this.data.length;
    }
  }

  // onFields(data: any, fields: any) {
  //   const result = new Array();

  //   fields.forEach((item: any) => {
  //     if (Object.keys(data).includes(item.field)) {
  //       result.push({
  //         field: item.field,
  //         width: item.width,
  //       });
  //     }
  //   });

  //   return result;
  // }

  public onData(data, field) {
    // tslint:disable-next-line: no-eval
    return eval('data.' + field);
  }

  public onBind(e: any) {
    const result = new Array();

    const dataList = this.data.slice(this.skip, this.take);

    // tslint:disable-next-line: prefer-const
    for (let d of dataList) {
      Object.keys(d).forEach((v) => {
        if (e === v) {
          result.push(d[v]);
        }
      });
    }

    return result;
  }

  public paging(e) {
    this.skip = e === 1 ? 0 : Number(this.size) * (Number(e) - 1);
    this.take = Math.ceil(this.data.length / this.size) === e ? this.data.length : Number(this.size) * Number(e);
  }

  public reSize(e) {
    this.size = e;
    this.pageList = new Array(Math.ceil(this.data.length / this.size < 1 ? 1 : this.data.length / this.size));
    this.paging(this.nowPage === undefined ? 1 : this.nowPage);
  }

  public chagnePageListColor(e) {
    for (let i = 1; i <= this.pageList.length; i++) {
      const page = document.querySelector('.pageCount_' + i.toString()) as HTMLElement;

      if (page.style.backgroundColor === 'rgb(229, 229, 229)') {
        page.style.backgroundColor = 'white';
      }
    }

    const newPage = document.querySelector('.pageCount_' + e) as HTMLElement;

    newPage.style.backgroundColor = '#e5e5e5';
  }

  public getNowPage() {
    for (let i = 1; i <= this.pageList.length; i++) {
      const page = document.querySelector('.pageCount_' + i.toString()) as HTMLElement;
      if (page.style.backgroundColor === 'rgb(229, 229, 229)') {
        return i;
      }
    }
  }

  public changePage(e) {
    this.nowPage = e;
    this.chagnePageListColor(e);
    this.paging(this.nowPage === undefined ? 1 : this.nowPage);
  }

  public firstPage() {
    if (this.getNowPage() !== 1) {
      this.chagnePageListColor(1);
      this.paging(1);
    } else {
      // tslint:disable-next-line: deprecation
      event.preventDefault();
    }
  }

  public prevPage() {
    const prev = this.getNowPage();
    if (prev !== 1) {
      this.chagnePageListColor(prev - 1);
      this.paging(prev - 1);
    } else {
      // tslint:disable-next-line: deprecation
      event.preventDefault();
    }
  }

  public nextPage() {
    const next = this.getNowPage();
    if (next !== this.pageList.length) {
      this.chagnePageListColor(next + 1);
      this.paging(next + 1);
    } else {
      // tslint:disable-next-line: deprecation
      event.preventDefault();
    }
  }

  public endPage() {
    if (this.getNowPage() !== this.pageList.length) {
      this.chagnePageListColor(this.pageList.length);
      this.paging(this.pageList.length);
    } else {
      // tslint:disable-next-line: deprecation
      event.preventDefault();
    }
  }

  public onDblClick(value: any) {
    this.dbldata.emit(value);
  }
}
