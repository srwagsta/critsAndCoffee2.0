import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuardService as BasicAuthGuard,
  RoleGuardService as RoleGuard
} from './services/auth-guard.service';
import { CritsLoginComponent } from './components/crits-login/crits-login.component';
import { CritsRegisterComponent } from './components/crits-register/crits-register.component';
import { CritsLogoutComponent } from './components/crits-logout/crits-logout.component';
import { CritsRequestPasswordComponent } from './components/crits-request-password/crits-request-password.component';
import { CritsResetPasswordComponent } from './components/crits-reset-password/crits-reset-password.component';
import { CritsAccountSettingsComponent } from './components/crits-account-settings/crits-account-settings.component';
import { GlobalUserRoles } from './models/auth-roles.model';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        component: CritsLoginComponent
      },
      {
        path: 'login',
        component: CritsLoginComponent
      },
      {
        path: 'register',
        component: CritsRegisterComponent
      },
      {
        path: 'account',
        component: CritsAccountSettingsComponent,
        canActivate: [BasicAuthGuard]
      },
      {
        path: 'logout',
        component: CritsLogoutComponent,
        canActivate: [BasicAuthGuard]

      },
      {
        path: 'request-password',
        component: CritsRequestPasswordComponent
      },
      {
        path: 'reset-password',
        component: CritsResetPasswordComponent
      },
      {
        path: 'admin',
        component: AdminDashboardComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: GlobalUserRoles.ADMIN
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
