import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
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
