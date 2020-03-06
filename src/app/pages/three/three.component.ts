import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {

  }

  ngAfterViewInit(){
    const height = document.querySelector('.insert-word').clientHeight + document.querySelector('.data-grid-header').clientHeight;
    const body = document.getElementsByClassName('data-grid-body')[0] as HTMLElement;
    body.style.height = 'calc(100% - ' + height.toString() + 'px';
  }

  public dataArray: any = [{
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  },
  {
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  },
  {
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  },
  {
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  },
  {
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  },
  {
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  },
  {
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  },
  {
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  },
  {
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  },
  {
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  },
  {
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  },
  {
    content_one : '삼행시는',
    content_two : '행동보다는',
    content_three : '시도를 할때가 재밌다.',
    name : '나규태',
    date : '2020-02-02',
    point : '20'
  }
  ];
}
