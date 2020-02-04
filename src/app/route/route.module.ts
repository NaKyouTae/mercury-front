import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './route.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [RouteComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  bootstrap: [RouteComponent]
})
export class RouteModule { }
