import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { WeekWordComponent } from './week-word/week-word.component';
import { MenuComponent } from './menu/menu.component';
import { RoleComponent } from './role/role.component';
import { AdminGuard } from 'src/app/core/guard/admin/admin.guard';
import { MailComponent } from './mail/mail.component';
import { GradeComponent } from './grade/grade.component';
import { LoginHistoryComponent } from './login-history/login-history.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent, canActivate: [AdminGuard] },
  { path: 'weekword', component: WeekWordComponent, canActivate: [AdminGuard] },
  { path: 'user', component: UserComponent, canActivate: [AdminGuard] },
  { path: 'role', component: RoleComponent, canActivate: [AdminGuard] },
  { path: 'grade', component: GradeComponent, canActivate: [AdminGuard] },
  { path: 'mail', component: MailComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginHistoryComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
