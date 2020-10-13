import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertModule as BsAlertModule } from 'ngx-bootstrap/alert';
@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, BsAlertModule.forRoot()],
})
export class AlertModule { }
