
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/core/guard/login/login.guard';
import { CashHistoryComponent } from './cash-history/cash-history.component';
import { CashRequestComponent } from './cash-request/cash-request.component';

const routes: Routes = [
  { path: 'history', component: CashHistoryComponent, canActivate: [LoginGuard] },
  { path: 'request', component: CashRequestComponent, canActivate: [LoginGuard] },
];
export const CashRoutingModule = RouterModule.forChild(routes);
