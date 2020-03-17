import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekWordComponent } from './week-word.component';
import { CustomGridModule } from 'src/app/shared/grid/grid.module';
import { FormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';

@NgModule({
  declarations: [WeekWordComponent],
  imports: [CommonModule, CustomGridModule, FormsModule, PageTitleModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WeekWordModule {}
