import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashComponent } from './cash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { UserGridModule } from 'src/app/shared/ui/grid/user/user-grid.module';
import { LogoModule } from 'src/app/shared/ui/logo/logo.module';

@NgModule({
  declarations: [CashComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PageTitleModule, UserGridModule, LogoModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CashModule {}
