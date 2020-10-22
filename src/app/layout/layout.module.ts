import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './header/login/login.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteModule } from './route/route.module';
import { LogoModule } from '../shared/ui/logo/logo.module';
import { LoginFormComponent } from './header/login/login-form/login-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    LogoModule,
    FormsModule,
    RouteModule,
    RouterModule,
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
  bootstrap: [LayoutComponent],
})
export class LayoutModule { }
