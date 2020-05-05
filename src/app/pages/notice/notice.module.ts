import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from './notice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';

@NgModule({
  declarations: [NoticeComponent],
  imports: [CommonModule, AdminGridModule, FormsModule, PageTitleModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NoticeModule {}
