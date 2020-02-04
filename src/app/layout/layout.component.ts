import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.resize();
  }

  resize(){
    const height = window.innerHeight - document.querySelector('.page-header').clientHeight - document.querySelector('.page-footer').clientHeight - document.querySelector('.page-route').clientHeight;
    document.querySelector('.page-content').setAttribute('style', 'height:' + (height - 70) + 'px;');
  }
}
