import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekWordComponent } from './week-word.component';
import { CustomGridModule } from 'src/app/shared/ui/grid/grid.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';

@NgModule({
  declarations: [WeekWordComponent],
  imports: [CommonModule, CustomGridModule, FormsModule, PageTitleModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WeekWordModule {}
