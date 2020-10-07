import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './mail.component';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MailComponent }
];

@NgModule({
  declarations: [MailComponent],
  imports: [
    CommonModule,
    PageTitleModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    AdminGridModule,
    RouterModule.forChild(routes)
  ],
})
export class MailModule { }
