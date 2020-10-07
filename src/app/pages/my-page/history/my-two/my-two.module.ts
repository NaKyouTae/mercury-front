import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTwoComponent } from './my-two.component';
import { WordHistoryModule } from '../word-history/word-history.module';
import { UserListModule } from 'src/app/shared/ui/content/user-list/user-list.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MyTwoComponent }
];

@NgModule({
  declarations: [MyTwoComponent],
  imports: [CommonModule, WordHistoryModule, UserListModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyTwoModule { }
