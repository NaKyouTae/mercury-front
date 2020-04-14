import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomGridComponent } from './grid.component';
import { PagingComponent } from './paging/paging.component';
import { RowModalDirectiveModule } from '../../directive/modal/row/row-modal.module';
import { BtnModalDirectiveModule } from '../../directive/modal/btn/btn-modal.module';

@NgModule({
  declarations: [CustomGridComponent, PagingComponent],
  imports: [CommonModule, FormsModule, RowModalDirectiveModule, BtnModalDirectiveModule],
  exports: [CustomGridComponent],
})
export class CustomGridModule { }
