import { reducer } from './core/store/common/common.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
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
import { ThreeModule } from './pages/three/three.module';
import { TwoModule } from './pages/two/two.module';
import { MyThreeModule } from './pages/my-page/history/my-three/my-three.module';
import { MyTwoModule } from './pages/my-page/history/my-two/my-two.module';
import { JobModule } from './pages/admin/batch/job/job.module';
import { TriggerModule } from './pages/admin/batch/trigger/trigger.module';
import { SchedulerModule } from './pages/admin/batch/scheduler/scheduler.module';
import { ConfigModule } from './pages/admin/config/config.module';
import { GradeModule as AdminGradeModule } from './pages/admin/grade/grade.module';
import { GradeModule } from './pages/my-page/grade/grade.module';
import { HistoryModule } from './pages/admin/history/history.module';
import { LogsModule } from './pages/admin/logs/logs.module';
import { MailModule } from './pages/admin/mail/mail.module';
import { MenuModule } from './pages/admin/menu/menu.module';
import { NoticeModule as AdminNoticeModule } from './pages/admin/notice/notice.module';
import { NoticeModule } from './pages/notice/notice.module';
import { RoleModule } from './pages/admin/role/role.module';
import { UserModule } from './pages/admin/user/user.module';
import { WeekWordModule } from './pages/admin/week-word/week-word.module';
import { HonorModule } from './pages/honor/honor.module';
import { MileageModule as AdminMileageModule } from './pages/admin/mileage/mileage.module';
import { MileageModule } from './pages/my-page/mileage/mileage.module';
import { MileageHistoryModule } from './pages/my-page/mileage/mileage-history/mileage-history.module';
import { MileageRequestModule } from './pages/my-page/mileage/mileage-request/mileage-request.module';


const pages = [
  LayoutModule,
  TwoModule,
  ThreeModule,
  NoticeModule,
  MileageModule,
  MileageRequestModule,
  MileageHistoryModule,
  MyTwoModule,
  MyThreeModule,
  GradeModule,
  HonorModule,
  WeekWordModule,
  UserModule,
  RoleModule,
  AdminNoticeModule,
  AdminMileageModule,
  MenuModule,
  MailModule,
  LogsModule,
  HistoryModule,
  AdminGradeModule,
  ConfigModule,
  TriggerModule,
  SchedulerModule,
  JobModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    pages,
    CommonModule,
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ common: reducer }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogoutInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
