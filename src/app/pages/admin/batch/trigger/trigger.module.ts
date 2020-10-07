import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriggerComponent } from './trigger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TriggerComponent }
];

@NgModule({
  declarations: [TriggerComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, AdminGridModule, PageTitleModule, RouterModule.forChild(routes)
  ]
})
export class TriggerModule { }
