import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { CritsLoginComponent } from './components/crits-login/crits-login.component';
import { CritsLogoutComponent } from './components/crits-logout/crits-logout.component';
import { InlineAccountComponent } from './components/inline-account/inline-account.component';import { CritsRegisterComponent } from './components/crits-register/crits-register.component';
import { CritsRequestPasswordComponent } from './components/crits-request-password/crits-request-password.component';
import { CritsResetPasswordComponent } from './components/crits-reset-password/crits-reset-password.component';

import { AuthState } from './state/auth.state';
import { NgxsModule } from '@ngxs/store';

import { ReactiveFormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSnackBarModule,
  MatMenuModule,
  MatIconModule,
  MatTooltipModule
} from '@angular/material';

import { FormFieldErrorMessageComponent } from './components/form-field-error-message/form-field-error-message.component';
import { AuthService } from './services/auth.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

@NgModule({
  declarations: [
    CritsLoginComponent,
    CritsRegisterComponent,
    CritsRequestPasswordComponent,
    CritsResetPasswordComponent,
    FormFieldErrorMessageComponent,
    CritsLogoutComponent,
    InlineAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    NgxsModule.forFeature([AuthState]),
    FontAwesomeModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [AuthService],
  exports: [InlineAccountComponent]
})
export class AuthModule { }
