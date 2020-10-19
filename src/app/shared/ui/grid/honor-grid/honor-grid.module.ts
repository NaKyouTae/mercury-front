import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HonorGridComponent } from './honor-grid.component';
import { RowDbclickModule } from 'src/app/shared/directive/grid-details/row-dbclick/row-dbclick.module';
import { InfiniteScrollSelectModule } from '../../select/infinite-scroll-select/infinite-scroll-select.module';
import { BtnClickModule } from 'src/app/shared/directive/grid-details/btn-click/btn-click.module';

@NgModule({
  declarations: [HonorGridComponent],
  exports: [HonorGridComponent],
  imports: [CommonModule, RowDbclickModule, BtnClickModule, InfiniteScrollSelectModule],
})
export class HonorGridModule {}
