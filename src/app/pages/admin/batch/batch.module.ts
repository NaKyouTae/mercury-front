import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { BatchRoutingModule } from './batch-routing.module';
import { BatchComponent } from './batch.component';



@NgModule({
  declarations: [BatchComponent],
  imports: [
    CommonModule, PageTitleModule, BatchRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BatchModule { }
