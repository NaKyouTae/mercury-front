import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { Routes, RouterModule } from '@angular/router';
import { MyPageComponent } from './my-page.component';
import { MyThreeComponent } from './history/my-three/my-three.component';
import { MyTwoComponent } from './history/my-two/my-two.component';

const routes: Routes = [
  {
    path: '',
    component: MyPageComponent,
    children: [
      { path: '', redirectTo: 'userinfo', pathMatch: 'full' },
      { path: 'userinfo', component: UserInfoComponent },
      {
        path: 'history',
        children: [
          { path: '', redirectTo: 'three', pathMatch: 'full' },
          { path: 'three', component: MyThreeComponent },
          { path: 'two', component: MyTwoComponent },
        ],
      },
    ],
  },
];

export const MyPageRoutingModule = RouterModule.forChild(routes);
