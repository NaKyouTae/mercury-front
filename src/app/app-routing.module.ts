import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { HonorComponent } from './menu/honor/honor.component';
import { TwoComponent } from './menu/two/two.component';
import { ThreeComponent } from './menu/three/three.component';
import { NoticeComponent } from './menu/notice/notice.component';


const routes: Routes = [{path: '', component: MainComponent},
{path: 'layout', component: LayoutComponent, children: [
  {path: 'honor', component: HonorComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent},
  {path: 'notice', component: NoticeComponent}
]}];

export const AppRoutingModule = RouterModule.forRoot(routes);

