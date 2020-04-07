import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeListChildComponent } from './tree-list-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalDirective } from 'src/app/shared/directive/modal/modal.directive';
import { FormsService } from 'src/app/shared/util/forms.service';

@NgModule({
  declarations: [TreeListChildComponent, ModalDirective],
  exports: [TreeListChildComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class TreeListChildModule {}
