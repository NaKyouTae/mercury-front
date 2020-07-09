import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserGridComponent } from './user-grid.component';
import { RowModalDirectiveModule } from '../../../directive/modal/row/row-modal.module';
import { BtnModalDirectiveModule } from '../../../directive/modal/btn/btn-modal.module';
import { PagingModule } from '../paging/paging.module';

@NgModule({
  declarations: [UserGridComponent],
  imports: [CommonModule, FormsModule, RowModalDirectiveModule, BtnModalDirectiveModule, PagingModule],
  exports: [UserGridComponent],
})
export class UserGridModule {}
