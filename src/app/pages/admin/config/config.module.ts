import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule, PageTitleModule, FormsModule, ReactiveFormsModule
  ]
})
export class ConfigModule { }
