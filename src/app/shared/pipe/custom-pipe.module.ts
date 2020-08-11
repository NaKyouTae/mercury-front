import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridDataPipe } from './grid/grid-data.pipe';

@NgModule({
  declarations: [GridDataPipe],
  imports: [CommonModule],
  exports: [GridDataPipe]
})
export class CustomPipeModule { }
