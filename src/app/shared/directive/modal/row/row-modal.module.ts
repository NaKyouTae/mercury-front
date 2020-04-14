import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RowModalDirective } from './row-modal.directive';

@NgModule({
  declarations: [RowModalDirective],
  imports: [CommonModule, FormsModule],
  exports: [RowModalDirective],
})
export class RowModalDirectiveModule { }
