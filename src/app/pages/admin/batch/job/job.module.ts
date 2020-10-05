import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';
import { JobComponent } from './job.component';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';



@NgModule({
  declarations: [JobComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, AdminGridModule, PageTitleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobModule { }
