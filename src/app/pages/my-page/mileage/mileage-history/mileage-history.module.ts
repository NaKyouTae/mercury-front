import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MileageHistoryComponent } from './mileage-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserGridModule } from 'src/app/shared/ui/grid/user/user-grid.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MileageHistoryComponent }
];

@NgModule({
  declarations: [MileageHistoryComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserGridModule, RouterModule.forChild(routes)],
})
export class MileageHistoryModule { }
