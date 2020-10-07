import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/core/guard/login/login.guard';
import { MileageComponent } from '../mileage/mileage.component';
import { MileageHistoryComponent } from './mileage-history/mileage-history.component';
import { MileageRequestComponent } from './mileage-request/mileage-request.component';

const routes: Routes = [
  {
    path: '',
    component: MileageComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', redirectTo: 'history', pathMatch: 'full' },
      { path: 'history', component: MileageHistoryComponent, canActivate: [LoginGuard] },
      { path: 'request', component: MileageRequestComponent, canActivate: [LoginGuard] },
    ],
  },
];

export const MileageRoutingModule = RouterModule.forChild(routes);
