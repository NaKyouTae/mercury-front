import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashHistoryComponent } from './cash-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserGridModule } from 'src/app/shared/ui/grid/user/user-grid.module';



@NgModule({
  declarations: [CashHistoryComponent],
  exports: [CashHistoryComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserGridModule],
})
export class CashHistoryModule { }
