import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { CustomGridModule } from 'src/app/shared/ui/grid/grid.module';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, CustomGridModule, FormsModule, PageTitleModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule {}
