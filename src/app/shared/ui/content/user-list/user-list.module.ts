import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [UserListComponent],
  declarations: [UserListComponent],
})
export class UserListModule { }
