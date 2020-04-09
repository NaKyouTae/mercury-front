import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalDirective } from '../../directive/modal/modal.directive';

@NgModule({
  declarations: [ModalDirective],
  imports: [CommonModule, FormsModule],
  exports: [ModalDirective],
})
export class ModalDirectiveModule {}
