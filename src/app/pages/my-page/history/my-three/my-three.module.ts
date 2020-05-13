import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyThreeComponent } from './my-three.component';
import { WordHistoryModule } from '../word-history/word-history.module';

@NgModule({
  declarations: [MyThreeComponent],
  imports: [CommonModule, WordHistoryModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyThreeModule {}
