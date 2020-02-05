import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HonorComponent } from './honor.component';
import { MenuModule } from '../menu.module';



@NgModule({
  declarations: [HonorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MenuModule
  ]
})
export class HonorModule { }
