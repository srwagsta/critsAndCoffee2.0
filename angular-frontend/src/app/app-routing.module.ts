import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {InstagramMapComponent} from "./components/instagram-map/instagram-map.component";
import {PrivacyPolicyComponent} from "./components/legal-documents/privacy-policy/privacy-policy.component";
import {ProjectLicenseComponent} from "./components/legal-documents/project-license/project-license.component";
import {ApiTermsOfUseComponent} from "./components/legal-documents/api-terms-of-use/api-terms-of-use.component";
import {CopyrightPolicyComponent} from "./components/legal-documents/copyright-policy/copyright-policy.component";


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
      path: 'about',
      component: AboutComponent
  },
  {
    path: 'instagram-map',
    component: InstagramMapComponent
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
export class AppRoutingModule { }
