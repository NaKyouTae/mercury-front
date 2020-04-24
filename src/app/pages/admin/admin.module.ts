import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';
import { WeekWordModule } from './week-word/week-word.module';
import { RoleModule } from './role/role.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule, UserModule, MenuModule, WeekWordModule, RoleModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
