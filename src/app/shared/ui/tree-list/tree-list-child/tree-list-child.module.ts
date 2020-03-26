import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeListChildComponent } from './tree-list-child.component';

@NgModule({
  declarations: [TreeListChildComponent],
  exports: [TreeListChildComponent],
  imports: [CommonModule]
})
export class TreeListChildModule { }
