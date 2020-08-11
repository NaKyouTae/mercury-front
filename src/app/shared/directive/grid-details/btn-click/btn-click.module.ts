import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnClickDirective } from './btn-click.directive';



@NgModule({
  declarations: [BtnClickDirective],
  imports: [CommonModule],
  exports: [BtnClickDirective]
})
export class BtnClickModule { }
