import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';



@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, AdminGridModule, PageTitleModule
  ]
})
export class SchedulerModule { }
