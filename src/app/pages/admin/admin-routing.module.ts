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
import { CashComponent } from './cash/cash.component';
import { BatchComponent } from './batch/batch.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent, canActivate: [AdminGuard] },
  { path: 'weekword', component: WeekWordComponent, canActivate: [AdminGuard] },
  { path: 'user', component: UserComponent, canActivate: [AdminGuard] },
  { path: 'role', component: RoleComponent, canActivate: [AdminGuard] },
  { path: 'grade', component: GradeComponent, canActivate: [AdminGuard] },
  { path: 'mail', component: MailComponent, canActivate: [AdminGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AdminGuard] },
  { path: 'config', component: ConfigComponent, canActivate: [AdminGuard] },
  { path: 'notice', component: NoticeComponent, canActivate: [AdminGuard] },
  { path: 'log', component: LogsComponent, canActivate: [AdminGuard] },
  { path: 'cash', component: CashComponent, canActivate: [AdminGuard] },
  { path: 'batch', loadChildren: () => import('./batch/batch.module').then((m) => m.BatchModule), canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
