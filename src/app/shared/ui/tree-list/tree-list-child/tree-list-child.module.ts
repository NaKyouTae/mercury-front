import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeListChildComponent } from './tree-list-child.component';
import { ModalDirective } from 'src/app/shared/directive/modal.directive';

@NgModule({
  declarations: [TreeListChildComponent, ModalDirective],
  exports: [TreeListChildComponent],
  imports: [CommonModule]
})
export class TreeListChildModule { }
