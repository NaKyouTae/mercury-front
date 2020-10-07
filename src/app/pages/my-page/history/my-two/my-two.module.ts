import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTwoComponent } from './my-two.component';
import { WordHistoryModule } from '../word-history/word-history.module';
import { UserListModule } from 'src/app/shared/ui/content/user-list/user-list.module';

@NgModule({
  imports: [CommonModule, WordHistoryModule, UserListModule],
  declarations: [MyTwoComponent],
})
export class MyTwoModule { }
