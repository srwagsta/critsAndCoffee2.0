import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopyrightPolicyComponent } from './components/copyright-policy/copyright-policy.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ProjectLicenseComponent } from './components/project-license/project-license.component';
import { ApiTermsOfUseComponent } from './components/api-terms-of-use/api-terms-of-use.component';


const routes: Routes = [
  {
    path: '',
    component: CopyrightPolicyComponent
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule { }
