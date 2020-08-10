import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserGridComponent } from './user-grid.component';
import { BtnModalDirectiveModule } from '../../../directive/modal/btn/btn-modal.module';
import { RowDbclickModule } from 'src/app/shared/directive/grid-details/row-dbclick/row-dbclick.module';
import { PagingModule } from '../paging/paging.module';

@NgModule({
  declarations: [UserGridComponent],
  imports: [CommonModule, FormsModule, RowDbclickModule, BtnModalDirectiveModule, PagingModule],
  exports: [UserGridComponent],
})
export class UserGridModule { }
