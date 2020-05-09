import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { AdvertOneComponent } from './advert-one/advert-one.component';
import { AdvertTwoComponent } from './advert-two/advert-two.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './header/login/login.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteModule } from './route/route.module';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, AdvertOneComponent, AdvertTwoComponent, ContentComponent, LoginComponent],
  imports: [CommonModule, MatDialogModule, FormsModule, ReactiveFormsModule, RouteModule, AppRoutingModule],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }],
  bootstrap: [LayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {}
