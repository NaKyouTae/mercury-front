import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MileageComponent } from './mileage.component';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MileageComponent }
];


@NgModule({
  declarations: [MileageComponent],
  imports: [CommonModule, PageTitleModule, FormsModule, ReactiveFormsModule, AdminGridModule, RouterModule.forChild(routes)],
})
export class MileageModule { }
