import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './route.component';
import { RouteChildModule } from 'src/app/shared/ui/route-child/route-child.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [RouteComponent],
  exports: [RouteComponent],
  imports: [CommonModule, RouteChildModule, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RouteModule {}
