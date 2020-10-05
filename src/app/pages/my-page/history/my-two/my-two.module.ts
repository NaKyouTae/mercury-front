import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTwoComponent } from './my-two.component';
import { WordHistoryModule } from '../word-history/word-history.module';
import { UserListModule } from 'src/app/shared/ui/content/user-list/user-list.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, WordHistoryModule, UserListModule],
  declarations: [MyTwoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyTwoModule { }
