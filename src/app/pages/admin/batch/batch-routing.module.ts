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
      { path: '', redirectTo: 'scheduler', pathMatch: 'full' },
      { path: 'scheduler', component: SchedulerComponent, canActivate: [AdminGuard] },
      { path: 'trigger', component: TriggerComponent, canActivate: [AdminGuard] },
      { path: 'job', component: JobComponent, canActivate: [AdminGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatchRoutingModule { }
