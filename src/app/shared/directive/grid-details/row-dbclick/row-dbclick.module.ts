import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowDbclickDirective } from './row-dbclick.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RowDbclickDirective],
  imports: [CommonModule, FormsModule],
  exports: [RowDbclickDirective]
})
export class RowDbclickModule { }
