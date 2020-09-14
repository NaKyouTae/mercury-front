import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeListChildComponent } from './tree-list-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RowModalDirective } from 'src/app/shared/directive/modal/row/row-modal.directive';
import { RowModalDirectiveModule } from 'src/app/shared/directive/modal/row/row-modal.module';
import { InfiniteScrollSelectModule } from '../../select/infinite-scroll-select/infinite-scroll-select.module';

@NgModule({
  declarations: [TreeListChildComponent],
  exports: [TreeListChildComponent, RowModalDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RowModalDirectiveModule, InfiniteScrollSelectModule],
})
export class TreeListChildModule {}
