import { reducer } from './core/store/common/common.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JwtInterceptorService } from './core/interceptors/jwt/jwt-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginInterceptorService } from './core/interceptors/login/login-interceptor.service';
import { ErrorInterceptorService } from './core/interceptors/error/error-interceptor.service';
import { LogoutInterceptorService } from './core/interceptors/logout/logout-interceptor.service';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomAlertModule } from './shared/ui/alert/custom-alert.module';

const viewModules = [CustomAlertModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    viewModules,
    LayoutModule,
    CommonModule,
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    StoreModule.forRoot({ common: reducer }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    BsModalRef,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogoutInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
