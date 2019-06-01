import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from '@nebular/auth';
import {
  AboutComponent,
  PageNotFoundComponent,
  HomeComponent,
  InstagramMapComponent,
  PrivacyPolicyComponent,
  ProjectLicenseComponent,
  ApiTermsOfUseComponent,
  CopyrightPolicyComponent,
  GameOfLifeComponent
} from './components';

const routes: Routes = [
// Base routes
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },

// Feature component routes
  {
    path: 'instagram-map',
    component: InstagramMapComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'game-of-life',
    component: GameOfLifeComponent
  },

// Legal routes
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'project-license',
    component: ProjectLicenseComponent
  },
  {
    path: 'terms-of-use',
    component: ApiTermsOfUseComponent
  },
  {
    path: 'copyright',
    component: CopyrightPolicyComponent
  },

// Auth routes
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent
      },
      {
        path: 'login',
        component: NbLoginComponent
      },
      {
        path: 'register',
        component: NbRegisterComponent
      },
      {
        path: 'logout',
        component: NbLogoutComponent
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent
      }
    ]
  },

// 404 Route
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
