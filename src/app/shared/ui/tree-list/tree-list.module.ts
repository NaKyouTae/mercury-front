import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTreeListComponent } from './tree-list.component';
import { TreeListChildModule } from './tree-list-child/tree-list-child.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollSelectModule } from 'src/app/shared/ui/select/infinite-scroll-select/infinite-scroll-select.module';

@NgModule({
  declarations: [CustomTreeListComponent],
  exports: [CustomTreeListComponent],
  imports: [CommonModule, TreeListChildModule, FormsModule, ReactiveFormsModule, InfiniteScrollSelectModule],
})
export class CustomTreeListModule { }
