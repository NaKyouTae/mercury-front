import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeListChildComponent } from './tree-list-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalDirective } from 'src/app/shared/directive/modal/modal.directive';
import { ModalDirectiveModule } from 'src/app/shared/directive/modal/modal.module';

@NgModule({
  declarations: [TreeListChildComponent],
  exports: [TreeListChildComponent, ModalDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalDirectiveModule],
})
export class TreeListChildModule {}
