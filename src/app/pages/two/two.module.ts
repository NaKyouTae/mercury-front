import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoComponent } from './two.component';
import { WordModule } from 'src/app/shared/ui/content/word/word.module';
import { UserListModule } from 'src/app/shared/ui/content/user-list/user-list.module';
import { UserContentsModule } from 'src/app/shared/ui/content/user-contents/user-contents.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TwoComponent },
];

@NgModule({
  declarations: [TwoComponent],
  imports: [
    CommonModule,
    WordModule,
    UserListModule,
    UserContentsModule,
    RouterModule.forChild(routes)
  ],
})
export class TwoModule { }
