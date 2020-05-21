import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPageComponent } from './my-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPageRoutingModule } from './my-page-routing.module';
import { RouteChildModule } from 'src/app/shared/ui/route-child/route-child.module';
import { BtnModalDirectiveModule } from 'src/app/shared/directive/modal/btn/btn-modal.module';

@NgModule({
  declarations: [MyPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MyPageRoutingModule, RouteChildModule, BtnModalDirectiveModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyPageModule {}
