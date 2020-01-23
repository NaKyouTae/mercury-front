import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuModule } from '../menu/menu.module';
import { RouteComponent } from './route/route.component';
import { AdvertOneComponent } from './advert-one/advert-one.component';
import { AdvertTwoComponent } from './advert-two/advert-two.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, RouteComponent, AdvertOneComponent, AdvertTwoComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MenuModule
  ],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
