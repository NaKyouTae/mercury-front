import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeListChildComponent } from './tree-list-child.component';
import { ModalDirective } from 'src/app/shared/directive/modal.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TreeListChildComponent, ModalDirective],
  exports: [TreeListChildComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class TreeListChildModule {}
