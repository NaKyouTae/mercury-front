import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HonorComponent } from './honor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HonorComponent }
];

@NgModule({
  declarations: [HonorComponent],
  imports: [
    CommonModule,
    FormsModule,
    PageTitleModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
})
export class HonorModule { }
