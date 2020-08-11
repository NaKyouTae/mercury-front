import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminGridComponent } from './admin-grid.component';
import { RowModalDirectiveModule } from '../../../directive/modal/row/row-modal.module';
import { BtnModalDirectiveModule } from '../../../directive/modal/btn/btn-modal.module';
import { PagingModule } from '../paging/paging.module';
import { CustomPipeModule } from 'src/app/shared/pipe/custom-pipe.module';

@NgModule({
  declarations: [AdminGridComponent],
  imports: [CommonModule, FormsModule, RowModalDirectiveModule, BtnModalDirectiveModule, PagingModule, CustomPipeModule],
  exports: [AdminGridComponent],
})
export class AdminGridModule { }
