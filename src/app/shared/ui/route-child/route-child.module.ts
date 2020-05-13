import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteChildComponent } from './route-child.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RouteChildComponent],
  exports: [RouteChildComponent],
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RouteChildModule { }
