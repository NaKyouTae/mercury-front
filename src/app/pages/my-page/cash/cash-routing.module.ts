import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/core/guard/login/login.guard';
import { CashHistoryComponent } from './cash-history/cash-history.component';
import { CashReqeustComponent } from './cash-reqeust/cash-reqeust.component';
import { CashComponent } from './cash.component';

const routes: Routes = [
  {
    path: '',
    component: CashComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', redirectTo: 'history', pathMatch: 'full' },
      { path: 'history', component: CashHistoryComponent, canActivate: [LoginGuard] },
      { path: 'request', component: CashReqeustComponent, canActivate: [LoginGuard] },
    ],
  },
];

export const CashRoutingModule = RouterModule.forChild(routes);
