import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CritsLoginComponent } from './components/crits-login/crits-login.component';
import { CritsRegisterComponent } from './components/crits-register/crits-register.component';
import { CritsLogoutComponent } from './components/crits-logout/crits-logout.component';
import { CritsRequestPasswordComponent } from './components/crits-request-password/crits-request-password.component';
import { CritsResetPasswordComponent } from './components/crits-reset-password/crits-reset-password.component';
import { AuthState } from './state/auth/auth.state';
import { NgxsModule } from '@ngxs/store';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    CritsLoginComponent,
    CritsRegisterComponent,
    CritsLogoutComponent,
    CritsRequestPasswordComponent,
    CritsResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    NgxsModule.forFeature([AuthState]),
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class AuthModule { }
