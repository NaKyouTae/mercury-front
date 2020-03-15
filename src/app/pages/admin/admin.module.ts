import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomGridModule } from 'src/app/shared/grid/grid.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, FormsModule, AdminRoutingModule, CustomGridModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule {}
