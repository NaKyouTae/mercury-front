import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public data:any = [
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'},
    {name: '나규태', phone: '010-9109-2682', email:'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36'}
  ];
  public fields:any;
  public sizeList:any = [10, 20, 30, 40, 50, 100];
  public size:any;
  public skip:any = 0;
  public take:any = 50;
  public tot:any = this.data.size;
  
  constructor(private router:Router) { }

  ngOnInit() {
    this.fields = Object.keys(this.data[0]);
  }

  onBind(e:any){
    const result = new Array();

    for(let d of this.data){
      Object.keys(d).forEach(v => {
        if(e === v) {
          result.push(d[v]);
        }
      })
    }

    return result.slice(this.skip, this.take);
  }

  paging(e:any){
    this.skip = this.size * e;
    this.take = this.skip + this.size;
  }

  reSize(e:any){
    this.size = e;
    this.paging(1);
  }

}
