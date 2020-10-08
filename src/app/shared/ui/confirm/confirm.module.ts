import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './confirm.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [ConfirmComponent],
  imports: [CommonModule, ModalModule.forChild()],
})
export class ConfirmModule { }
