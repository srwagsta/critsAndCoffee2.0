import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { CritsLoginComponent } from './components/crits-login/crits-login.component';
import { CritsInlineLoginComponent } from './components/crits-inline-login/crits-inline-login.component';
import { CritsRegisterComponent } from './components/crits-register/crits-register.component';
import { CritsRequestPasswordComponent } from './components/crits-request-password/crits-request-password.component';
import { CritsResetPasswordComponent } from './components/crits-reset-password/crits-reset-password.component';

import { AuthState } from './state/auth/auth.state';
import { NgxsModule } from '@ngxs/store';

import { ReactiveFormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSnackBarModule
} from '@angular/material';

import { FormFieldErrorMessageComponent } from './components/form-field-error-message/form-field-error-message.component';
import { CritsLogoutComponent } from './components/crits-logout/crits-logout.component';

@NgModule({
  declarations: [
    CritsLoginComponent,
    CritsRegisterComponent,
    CritsRequestPasswordComponent,
    CritsResetPasswordComponent,
    FormFieldErrorMessageComponent,
    CritsInlineLoginComponent,
    CritsLogoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    NgxsModule.forRoot([AuthState]),
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule
  ]
})
export class AuthModule { }
