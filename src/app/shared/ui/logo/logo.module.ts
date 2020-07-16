import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoLModule } from './logo-l/logo-l.module';
import { LogoMModule } from './logo-m/logo-m.module';
import { LogoSModule } from './logo-s/logo-s.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, LogoLModule, LogoMModule, LogoSModule
  ],
  exports: [LogoLModule, LogoMModule, LogoSModule]
})
export class LogoModule { }
