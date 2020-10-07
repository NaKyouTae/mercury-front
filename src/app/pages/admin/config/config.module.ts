import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ConfigComponent }
];

@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule, PageTitleModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ]
})
export class ConfigModule { }
