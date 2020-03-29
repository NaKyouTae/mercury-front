import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteChildComponent } from './route-child.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [RouteChildComponent],
  exports: [RouteChildComponent],
  imports: [CommonModule, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RouteChildModule {}
