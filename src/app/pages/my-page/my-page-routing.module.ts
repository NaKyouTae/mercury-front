import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { HistoryComponent } from './history/history.component';
import { Routes, RouterModule } from '@angular/router';
import { MyPageComponent } from './my-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyPageComponent,
    children: [
      { path: '', redirectTo: 'userinfo', pathMatch: 'full' },
      { path: 'userinfo', component: UserInfoComponent },
      { path: 'history', component: HistoryComponent },
    ],
  },
];

export const MyPageRoutingModule = RouterModule.forChild(routes);
