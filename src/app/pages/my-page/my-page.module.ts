import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPageComponent } from './my-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { HistoryModule } from './history/history.module';
import { UserInfoModule } from './user-info/user-info.module';
import { MyPageRoutingModule } from './my-page-routing.module';

@NgModule({
  declarations: [MyPageComponent],
  imports: [CommonModule, FormsModule, PageTitleModule, ReactiveFormsModule, HistoryModule, UserInfoModule, MyPageRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyPageModule {}
