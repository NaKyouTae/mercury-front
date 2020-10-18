import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HonorGridComponent } from './honor-grid.component';

@NgModule({
  declarations: [HonorGridComponent],
  exports: [HonorGridComponent],
  imports: [CommonModule],
})
export class HonorGridModule {}
