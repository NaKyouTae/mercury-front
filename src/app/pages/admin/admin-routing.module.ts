import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { WeekWordComponent } from './week-word/week-word.component';
import { MenuComponent } from './menu/menu.component';
import { RoleComponent } from './role/role.component';
import { AdminGuard } from 'src/app/core/guard/admin/admin.guard';
import { MailComponent } from './mail/mail.component';
import { GradeComponent } from './grade/grade.component';
import { ConfigComponent } from './config/config.component';
import { NoticeComponent } from './notice/notice.component';
import { LogsComponent } from './logs/logs.component';
import { BatchComponent } from './batch/batch.component';
import { HistoryComponent } from './history/history.component';
import { MileageComponent } from './mileage/mileage.component';

const routes: Routes = [
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule), canActivate: [AdminGuard] },
  { path: 'weekword', loadChildren: () => import('./week-word/week-word.module').then((m) => m.WeekWordModule), canActivate: [AdminGuard] },
  { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule), canActivate: [AdminGuard] },
  { path: 'role', loadChildren: () => import('./role/role.module').then((m) => m.RoleModule), canActivate: [AdminGuard] },
  { path: 'grade', loadChildren: () => import('./grade/grade.module').then((m) => m.GradeModule), canActivate: [AdminGuard] },
  { path: 'mail', loadChildren: () => import('./mail/mail.module').then((m) => m.MailModule), canActivate: [AdminGuard] },
  { path: 'history', loadChildren: () => import('./history/history.module').then((m) => m.HistoryModule), canActivate: [AdminGuard] },
  { path: 'config', loadChildren: () => import('./config/config.module').then((m) => m.ConfigModule), canActivate: [AdminGuard] },
  { path: 'notice', loadChildren: () => import('./notice/notice.module').then((m) => m.NoticeModule), canActivate: [AdminGuard] },
  { path: 'log', loadChildren: () => import('./logs/logs.module').then((m) => m.LogsModule), canActivate: [AdminGuard] },
  { path: 'mileage', loadChildren: () => import('./mileage/mileage.module').then((m) => m.MileageModule), canActivate: [AdminGuard] },
  { path: 'batch', loadChildren: () => import('./batch/batch.module').then((m) => m.BatchModule), canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
