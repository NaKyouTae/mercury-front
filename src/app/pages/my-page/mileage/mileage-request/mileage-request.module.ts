import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MileageRequestComponent } from './mileage-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserGridModule } from 'src/app/shared/ui/grid/user/user-grid.module';

@NgModule({
  declarations: [MileageRequestComponent],
  exports: [MileageRequestComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserGridModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MileageRequestModule { }
