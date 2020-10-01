import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptorService } from './core/interceptors/login/login-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorService } from './core/interceptors/jwt/jwt-interceptor.service';
import { LogoutInterceptorService } from './core/interceptors/logout/logout-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducer } from './core/store/common/common.reducer';
import { environment } from 'src/environments/environment';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ErrorInterceptorService } from './core/interceptors/error/error-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule,
    StoreModule.forRoot({ common: reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogoutInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
