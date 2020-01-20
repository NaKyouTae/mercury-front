import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuModule } from '../menu/menu.module';
import { AdvertComponent } from './advert/advert.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, AdvertComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MenuModule
  ],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
