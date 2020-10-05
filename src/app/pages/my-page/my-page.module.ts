import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPageComponent } from './my-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPageRoutingModule } from './my-page-routing.module';
import { BtnModalDirectiveModule } from 'src/app/shared/directive/modal/btn/btn-modal.module';
import { SelectedListModule } from 'src/app/shared/directive/selected-list/selected-list.module';

@NgModule({
  declarations: [MyPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MyPageRoutingModule, BtnModalDirectiveModule, SelectedListModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyPageModule { }
