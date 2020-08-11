import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserGridComponent } from './user-grid.component';
import { RowDbclickModule } from 'src/app/shared/directive/grid-details/row-dbclick/row-dbclick.module';
import { PagingModule } from '../paging/paging.module';
import { BtnClickModule } from 'src/app/shared/directive/grid-details/btn-click/btn-click.module';

@NgModule({
  declarations: [UserGridComponent],
  imports: [CommonModule, FormsModule, RowDbclickModule, BtnClickModule, PagingModule],
  exports: [UserGridComponent],
})
export class UserGridModule { }
