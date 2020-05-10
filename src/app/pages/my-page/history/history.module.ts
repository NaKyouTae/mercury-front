import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';

@NgModule({
  declarations: [HistoryComponent],
  exports: [HistoryComponent],
  imports: [CommonModule, AdminGridModule, FormsModule, ReactiveFormsModule],
})
export class HistoryModule {}
