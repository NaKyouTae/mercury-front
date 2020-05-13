import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTwoComponent } from './my-two.component';
import { WordHistoryModule } from '../word-history/word-history.module';

@NgModule({
  declarations: [MyTwoComponent],
  imports: [CommonModule, WordHistoryModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyTwoModule {}
