import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MileageComponent } from './mileage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { UserGridModule } from 'src/app/shared/ui/grid/user/user-grid.module';
import { LogoModule } from 'src/app/shared/ui/logo/logo.module';
import { SelectedListModule } from 'src/app/shared/directive/selected-list/selected-list.module';
import { MileageRoutingModule } from './mileage-routing.module';

@NgModule({
  declarations: [MileageComponent],
  // tslint:disable-next-line: max-line-length
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PageTitleModule, UserGridModule, LogoModule, MileageRoutingModule, SelectedListModule],
})
export class MileageModule { }
