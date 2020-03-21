import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTreeListComponent } from './tree-list.component';

@NgModule({
  declarations: [CustomTreeListComponent],
  exports: [CustomTreeListComponent],
  imports: [CommonModule]
})
export class CustomTreeListModule {}
