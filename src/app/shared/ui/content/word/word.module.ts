import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordComponent } from './word.component';

@NgModule({
  declarations: [WordComponent],
  exports: [WordComponent],
  imports: [CommonModule]
})
export class WordModule {}
