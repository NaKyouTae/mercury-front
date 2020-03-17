import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { WeekWordComponent } from './week-word/week-word.component';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';
import { WeekWordModule } from './week-word/week-word.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule, UserModule, MenuModule, WeekWordModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule {}
