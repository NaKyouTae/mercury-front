import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeComponent } from './grade.component';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: GradeComponent }
];


@NgModule({
  declarations: [GradeComponent],
  imports: [CommonModule, PageTitleModule, AdminGridModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class GradeModule { }
