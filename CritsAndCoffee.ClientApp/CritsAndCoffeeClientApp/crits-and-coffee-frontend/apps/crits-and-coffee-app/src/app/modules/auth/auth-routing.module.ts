import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CritsLoginComponent } from './components/crits-login/crits-login.component';
import { CritsRegisterComponent } from './components/crits-register/crits-register.component';
import { CritsLogoutComponent } from './components/crits-logout/crits-logout.component';
import { CritsRequestPasswordComponent } from './components/crits-request-password/crits-request-password.component';
import { CritsResetPasswordComponent } from './components/crits-reset-password/crits-reset-password.component';

const routes: Routes = [
  {
    path: 'auth',
    component: CritsLoginComponent,
    children: [
  {
    path: 'login',
    component: CritsLoginComponent
  },
  {
    path: 'register',
    component: CritsRegisterComponent
  },
  {
    path: 'logout',
    component: CritsLogoutComponent
  },
  {
    path: 'request-password',
    component: CritsRequestPasswordComponent
  },
  {
    path: 'reset-password',
    component: CritsResetPasswordComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
