import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from './notice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { UserGridModule } from 'src/app/shared/ui/grid/user/user-grid.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: NoticeComponent }
];

@NgModule({
  declarations: [NoticeComponent],
  imports: [
    CommonModule,
    UserGridModule,
    FormsModule,
    PageTitleModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
})
export class NoticeModule { }
