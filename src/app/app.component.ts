import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'competition-angular';

  constructor(private router: Router){}

  ngOnInit(){
    
  }

  ngAfterViewInit(){
    this.router.events.subscribe((e) => {
      if(e instanceof NavigationEnd){
        const height = window.innerHeight - document.querySelector('.page-header').clientHeight - document.querySelector('.page-footer').clientHeight - document.querySelector('.page-route').clientHeight;
        document.querySelector('.page-content').setAttribute('style', 'height:' + (height) + 'px;');
      }      
    })
  }
}
