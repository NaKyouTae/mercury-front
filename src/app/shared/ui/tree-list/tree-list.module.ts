import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTreeListComponent } from './tree-list.component';
import { TreeListChildModule } from './tree-list-child/tree-list-child.module';

@NgModule({
  declarations: [CustomTreeListComponent],
  exports: [CustomTreeListComponent],
  imports: [CommonModule, TreeListChildModule]
})
export class CustomTreeListModule {}
