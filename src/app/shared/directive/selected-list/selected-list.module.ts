import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedListDirective } from './selected-list.directive';

@NgModule({
  declarations: [SelectedListDirective],
  imports: [CommonModule],
  exports: [SelectedListDirective],
})
export class SelectedListModule {}
