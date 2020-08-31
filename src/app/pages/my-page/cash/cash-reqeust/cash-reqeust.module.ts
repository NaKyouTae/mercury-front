import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashReqeustComponent } from './cash-reqeust.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserGridModule } from 'src/app/shared/ui/grid/user/user-grid.module';

@NgModule({
  declarations: [CashReqeustComponent],
  exports: [CashReqeustComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserGridModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CashReqeustModule {}
