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
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
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
