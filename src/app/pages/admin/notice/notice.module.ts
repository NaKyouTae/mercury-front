import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from './notice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: NoticeComponent }
];

@NgModule({
  declarations: [NoticeComponent],
  imports: [
    CommonModule,
    AdminGridModule,
    FormsModule,
    PageTitleModule,
    ReactiveFormsModule,
    AngularEditorModule,
    RouterModule.forChild(routes)
  ],
})
export class NoticeModule { }
