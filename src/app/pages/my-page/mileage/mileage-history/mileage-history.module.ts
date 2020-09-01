import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MileageHistoryComponent } from './mileage-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserGridModule } from 'src/app/shared/ui/grid/user/user-grid.module';

@NgModule({
  declarations: [MileageHistoryComponent],
  exports: [MileageHistoryComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserGridModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CashHistoryModule { }
