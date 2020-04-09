import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomGridComponent } from './grid.component';
import { ModalDirectiveModule } from '../../directive/modal/modal.module';
import { PagingComponent } from './paging/paging.component';

@NgModule({
  declarations: [CustomGridComponent, PagingComponent],
  imports: [CommonModule, FormsModule, ModalDirectiveModule],
  exports: [CustomGridComponent],
})
export class CustomGridModule {}
