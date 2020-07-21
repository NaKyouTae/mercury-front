import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LogsComponent } from './logs/logs.component';
import { CashComponent } from './cash/cash.component';
import { BatchComponent } from './batch/batch.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
