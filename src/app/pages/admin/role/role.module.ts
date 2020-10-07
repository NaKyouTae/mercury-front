import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: RoleComponent }
];

@NgModule({
  declarations: [RoleComponent],
  imports: [CommonModule, AdminGridModule, FormsModule, PageTitleModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class RoleModule { }
