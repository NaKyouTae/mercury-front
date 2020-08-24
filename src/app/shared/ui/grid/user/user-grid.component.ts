import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, EmbeddedViewRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { JwtService } from '../../../common/jwt/jwt.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserGridComponent implements OnInit, OnChanges {
  @Input() public data: any;
  @Input() public fields: any;
  @Input() public template?: TemplateRef<any>;
  @Input() public gridWidth?: string;

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

  public sliceData: any;

  constructor(private jwt: JwtService, private view: ViewContainerRef) { }

  ngOnInit() {
    if (this.data !== undefined) {
      this.onInit();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fields !== undefined) {
      this.fields = changes.fields.currentValue;
    }

    if (changes.data !== undefined) {
      changes.data.previousValue = null;
      this.data = changes.data.currentValue;
      this.templateIntoData(this.data);
    }

    this.onInit();
  }


  public templateIntoData(data: any) {
    const view = this.view;
    const template = this.template;
    data.forEach(item => {
      item.template = template;
    });
  }

  public onInit() {
    this.fieldsNum = this.fields.length;
    this.tot = this.data.length;
    this.pageList = new Array(Math.ceil(this.data.length / this.size < 1 ? 1 : this.data.length / this.size));
    this.take = this.data.length > this.size ? this.size : this.data.length;
    this.onBind();
  }

  public onBind() {
    this.sliceData = this.data.slice(this.skip, this.take);
  }

  public paging(e) {
    this.skip = e === 1 ? 0 : Number(this.size) * (Number(e) - 1);
    this.take = Math.ceil(this.data.length / this.size) === e ? this.data.length : Number(this.size) * Number(e);
    this.onBind();
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
