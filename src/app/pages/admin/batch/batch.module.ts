import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { BatchRoutingModule } from './batch-routing.module';
import { BatchComponent } from './batch.component';

@NgModule({
  declarations: [BatchComponent],
  imports: [CommonModule, PageTitleModule, BatchRoutingModule],
})
export class BatchModule { }
