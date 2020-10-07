import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/core/guard/login/login.guard';
import { MileageComponent } from '../mileage/mileage.component';

const routes: Routes = [
  {
    path: '',
    component: MileageComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', redirectTo: 'history', pathMatch: 'full' },
      // tslint:disable-next-line: max-line-length
      { path: 'history', loadChildren: () => import('./mileage-history/mileage-history.module').then((m) => m.MileageHistoryModule), canActivate: [LoginGuard] },
      // tslint:disable-next-line: max-line-length
      { path: 'request', loadChildren: () => import('./mileage-request/mileage-request.module').then((m) => m.MileageRequestModule), canActivate: [LoginGuard] },
    ],
  },
];

export const MileageRoutingModule = RouterModule.forChild(routes);
