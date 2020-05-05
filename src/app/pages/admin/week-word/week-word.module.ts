import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekWordComponent } from './week-word.component';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';

@NgModule({
  declarations: [WeekWordComponent],
  imports: [CommonModule, AdminGridModule, FormsModule, PageTitleModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WeekWordModule {}
