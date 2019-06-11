import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { ApiTermsOfUseComponent } from './components/api-terms-of-use/api-terms-of-use.component';
import { CopyrightPolicyComponent } from './components/copyright-policy/copyright-policy.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ProjectLicenseComponent } from './components/project-license/project-license.component';
import { LegalDocumentWrapperComponent } from './components/legal-document-wrapper/legal-document-wrapper.component';

@NgModule({
  declarations: [
    ApiTermsOfUseComponent,
    CopyrightPolicyComponent,
    PrivacyPolicyComponent,
    ProjectLicenseComponent,
    LegalDocumentWrapperComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule
  ]
})
export class LegalModule { }
