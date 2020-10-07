import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import { PageTitleModule } from 'src/app/shared/ui/page-title/page-title.module';
import { CustomTreeListModule } from 'src/app/shared/ui/tree-list/tree-list.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MenuComponent }
];


@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, CustomTreeListModule, FormsModule, PageTitleModule, RouterModule.forChild(routes)],
})
export class MenuModule { }
