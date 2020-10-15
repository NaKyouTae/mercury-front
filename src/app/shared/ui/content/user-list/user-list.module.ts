import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [UserListComponent, CommonModule, FormsModule],
  declarations: [UserListComponent],
})
export class UserListModule { }
