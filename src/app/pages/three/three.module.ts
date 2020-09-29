import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from './three.component';
import { WordModule } from 'src/app/shared/ui/content/word/word.module';
import { UserListModule } from 'src/app/shared/ui/content/user-list/user-list.module';
import { UserContentsModule } from 'src/app/shared/ui/content/user-contents/user-contents.module';

@NgModule({
  declarations: [ThreeComponent],
  imports: [CommonModule, WordModule, UserListModule, UserContentsModule],
})
export class ThreeModule { }
