import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTreeListComponent } from './tree-list.component';
import { TreeListChildModule } from './tree-list-child/tree-list-child.module';
import { TreeListChildComponent } from './tree-list-child/tree-list-child.component';

@NgModule({
  declarations: [CustomTreeListComponent, TreeListChildComponent],
  exports: [CustomTreeListComponent, TreeListChildComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomTreeListModule { }
