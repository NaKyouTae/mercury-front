import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { WeekWordComponent } from './week-word/week-word.component';
import { MenuComponent } from './menu/menu.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'weekword', component: WeekWordComponent },
  { path: 'user', component: UserComponent },
  { path: 'role', component: RoleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
