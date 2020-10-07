import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsComponent } from './logs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { AdminGridModule } from 'src/app/shared/ui/grid/admin/admin-grid.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LogsComponent }
];

@NgModule({
  declarations: [LogsComponent],
  imports: [CommonModule, PageTitleModule, FormsModule, ReactiveFormsModule, AdminGridModule, RouterModule.forChild(routes)]
})
export class LogsModule { }
