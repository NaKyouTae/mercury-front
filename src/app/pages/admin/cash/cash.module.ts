import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CashComponent } from './cash.component';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';

@NgModule({
  declarations: [CashComponent],
  imports: [CommonModule, PageTitleModule, FormsModule, ReactiveFormsModule, AdminGridModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CashModule {}
