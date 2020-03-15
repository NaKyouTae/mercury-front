import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomGridComponent } from './grid.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [CustomGridComponent],
  declarations: [CustomGridComponent]
})
export class CustomGridModule {}
