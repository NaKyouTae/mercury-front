import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContentsComponent } from './user-contents.component';

@NgModule({
  declarations: [UserContentsComponent],
  exports: [UserContentsComponent],
  imports: [CommonModule]
})
export class UserContentsModule {}
