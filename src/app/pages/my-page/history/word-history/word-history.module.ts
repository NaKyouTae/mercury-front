import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordHistoryComponent } from './word-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WordHistoryComponent],
  exports: [WordHistoryComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class WordHistoryModule {}
