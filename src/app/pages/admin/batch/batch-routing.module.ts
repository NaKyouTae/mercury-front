import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { AdminGuard } from 'src/app/core/guard/admin/admin.guard';
import { TriggerComponent } from './trigger/trigger.component';
import { JobComponent } from './job/job.component';
import { BatchComponent } from './batch.component';

const routes: Routes = [
  {
    path: '',
    component: BatchComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', redirectTo: 'job', pathMatch: 'full' },
      { path: 'job', loadChildren: () => import('./job/job.module').then((m) => m.JobModule), canActivate: [AdminGuard] },
      { path: 'trigger', loadChildren: () => import('./trigger/trigger.module').then((m) => m.TriggerModule), canActivate: [AdminGuard] },
      // tslint:disable-next-line: max-line-length
      { path: 'scheduler', loadChildren: () => import('./scheduler/scheduler.module').then((m) => m.SchedulerModule), canActivate: [AdminGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatchRoutingModule { }
