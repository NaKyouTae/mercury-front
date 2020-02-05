import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if(e instanceof NavigationEnd){
        const height = window.innerHeight - document.querySelector('.page-header').clientHeight - document.querySelector('.page-footer').clientHeight - document.querySelector('.page-route').clientHeight;
        document.querySelector('.page-content').setAttribute('style', 'height:' + (height - 70) + 'px;');
      }      
    })
  }

  ngAfterViewInit(){
    this.resize();
  }

  resize(){
    const height = window.innerHeight - document.querySelector('.page-header').clientHeight - document.querySelector('.page-footer').clientHeight - document.querySelector('.page-route').clientHeight;
    document.querySelector('.page-content').setAttribute('style', 'height:' + (height - 70) + 'px;');
  }
}
