import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BtnModalDirective } from './btn-modal.directive';

@NgModule({
  declarations: [BtnModalDirective],
  imports: [CommonModule, FormsModule],
  exports: [BtnModalDirective],
})
export class BtnModalDirectiveModule { }
