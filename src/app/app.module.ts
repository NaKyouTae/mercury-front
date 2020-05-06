import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptorService } from './core/interceptors/login/login-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorService } from './core/interceptors/jwt/jwt-interceptor.service';
import { LogoutInterceptorService } from './core/interceptors/logout/logout-interceptor.service';
import { MyPageComponent } from './pages/my-page/my-page.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, BrowserAnimationsModule, HttpClientModule],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogoutInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
