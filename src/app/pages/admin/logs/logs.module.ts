import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsComponent } from './logs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';

@NgModule({
  declarations: [LogsComponent],
  imports: [CommonModule, PageTitleModule, FormsModule, ReactiveFormsModule, AdminGridModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LogsModule { }
