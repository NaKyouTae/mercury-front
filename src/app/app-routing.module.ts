import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ThreeComponent } from './pages/three/three.component';

const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: 'three', component: ThreeComponent },
      { path: 'two', loadChildren: () => import('./pages/two/two.module').then(m => m.TwoModule) },
      { path: 'honor', loadChildren: () => import('./pages/honor/honor.module').then(m => m.HonorModule) },
      { path: 'notice', loadChildren: () => import('./pages/notice/notice.module').then(m => m.NoticeModule) },
      { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
