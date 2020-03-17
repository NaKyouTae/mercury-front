import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ThreeComponent } from './pages/three/three.component';
import { TwoComponent } from './pages/two/two.component';
import { HonorComponent } from './pages/honor/honor.component';
import { NoticeComponent } from './pages/notice/notice.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'three', component: ThreeComponent },
      { path: 'two', component: TwoComponent },
      { path: 'honor', component: HonorComponent },
      { path: 'notice', component: NoticeComponent },
      { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
