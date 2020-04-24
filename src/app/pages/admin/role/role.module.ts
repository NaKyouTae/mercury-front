import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { CustomGridModule } from 'src/app/shared/ui/grid/grid.module';

@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,
    CustomGridModule,
    FormsModule,
    PageTitleModule,
    ReactiveFormsModule
  ]
})
export class RoleModule { }
