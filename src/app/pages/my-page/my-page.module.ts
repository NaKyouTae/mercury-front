import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPageComponent } from './my-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { UserInfoModule } from './user-info/user-info.module';
import { MyPageRoutingModule } from './my-page-routing.module';
import { RouteChildModule } from 'src/app/shared/ui/route-child/route-child.module';
import { WordHistoryComponent } from './history/word-history/word-history.component';

@NgModule({
  declarations: [MyPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserInfoModule, MyPageRoutingModule, RouteChildModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyPageModule {}
