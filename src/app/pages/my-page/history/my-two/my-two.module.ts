import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTwoComponent } from './my-two.component';
import { WordHistoryModule } from '../word-history/word-history.module';
import { UserListModule } from 'src/app/shared/ui/content/user-list/user-list.module';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  imports: [CommonModule, FormsModule, WordHistoryModule, UserListModule],
  declarations: [MyTwoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyTwoModule { }
