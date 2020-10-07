import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MileageRequestComponent } from './mileage-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserGridModule } from 'src/app/shared/ui/grid/user/user-grid.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MileageRequestComponent }
];

@NgModule({
  declarations: [MileageRequestComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserGridModule, RouterModule.forChild(routes)],
})
export class MileageRequestModule { }
