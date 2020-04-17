import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContentsComponent } from './user-contents.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserContentsComponent],
  exports: [UserContentsComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class UserContentsModule { }
