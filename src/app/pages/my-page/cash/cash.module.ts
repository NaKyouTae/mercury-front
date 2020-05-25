import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashComponent } from './cash.component';
import { CashRequestComponent } from './cash-request/cash-request.component';
import { CashHistoryComponent } from './cash-history/cash-history.component';
import { CashRoutingModule } from './cash-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';

@NgModule({
  declarations: [CashComponent, CashRequestComponent, CashHistoryComponent],
  imports: [
    CommonModule, CashRoutingModule, FormsModule, ReactiveFormsModule, PageTitleModule
  ]
})
export class CashModule { }
