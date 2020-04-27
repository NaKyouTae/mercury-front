import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptorService } from './core/login-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorService } from './core/jwt-interceptor.service';

export const interceptors = [{ provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true },
{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, BrowserAnimationsModule, HttpClientModule],
  providers: [CookieService, LoginInterceptorService, JwtInterceptorService, interceptors],
  bootstrap: [AppComponent],
})
export class AppModule { }
