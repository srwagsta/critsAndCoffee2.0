import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-root/app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UiModule } from './ui/ui.module';
import { InstagramMapComponent } from './components/instagram-map/instagram-map.component';
import { PrivacyPolicyComponent } from './components/legal-documents/privacy-policy/privacy-policy.component';
import { CopyrightPolicyComponent } from './components/legal-documents/copyright-policy/copyright-policy.component';
import { ProjectLicenseComponent } from './components/legal-documents/project-license/project-license.component';
import { ApiTermsOfUseComponent } from './components/legal-documents/api-terms-of-use/api-terms-of-use.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    InstagramMapComponent,
    PrivacyPolicyComponent,
    CopyrightPolicyComponent,
    ProjectLicenseComponent,
    ApiTermsOfUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
