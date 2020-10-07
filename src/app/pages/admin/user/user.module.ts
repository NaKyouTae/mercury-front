import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UserComponent }
];

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, AdminGridModule, PageTitleModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class UserModule { }
