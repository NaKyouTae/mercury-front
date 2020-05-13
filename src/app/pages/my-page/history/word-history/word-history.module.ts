import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordHistoryComponent } from './word-history.component';

@NgModule({
  declarations: [WordHistoryComponent],
  exports: [WordHistoryComponent],
  imports: [CommonModule],
})
export class WordHistoryModule {}
