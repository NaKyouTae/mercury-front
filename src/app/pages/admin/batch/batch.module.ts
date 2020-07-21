import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchComponent } from './batch.component';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';



@NgModule({
  declarations: [BatchComponent],
  imports: [
    CommonModule, PageTitleModule, FormsModule, ReactiveFormsModule, AdminGridModule
  ]
})
export class BatchModule { }
