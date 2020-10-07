import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './core/guard/admin/admin.guard';
import { LoginGuard } from './core/guard/login/login.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'three', pathMatch: 'full' },
      { path: 'three', loadChildren: () => import('./pages/three/three.module').then((m) => m.ThreeModule) },
      { path: 'two', loadChildren: () => import('./pages/two/two.module').then((m) => m.TwoModule) },
      { path: 'honor', loadChildren: () => import('./pages/honor/honor.module').then((m) => m.HonorModule) },
      { path: 'notice', loadChildren: () => import('./pages/notice/notice.module').then((m) => m.NoticeModule) },
      { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule), canActivate: [AdminGuard] },
      { path: 'my', loadChildren: () => import('./pages/my-page/my-page.module').then((m) => m.MyPageModule), canActivate: [LoginGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
