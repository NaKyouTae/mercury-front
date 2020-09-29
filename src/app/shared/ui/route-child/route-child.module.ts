import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteChildComponent } from './route-child.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RouteChildComponent],
  exports: [RouteChildComponent],
  imports: [CommonModule, RouterModule],
})
export class RouteChildModule { }
