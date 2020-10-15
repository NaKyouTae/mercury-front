import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CustomAlertComponent } from './custom-alert.component';

@NgModule({
  declarations: [CustomAlertComponent],
  imports: [CommonModule, ModalModule.forChild()],
})
export class CustomAlertModule {}
