import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: 'user', component: AdminComponent }];

export const AdminRoutingModule = RouterModule.forChild(routes);
