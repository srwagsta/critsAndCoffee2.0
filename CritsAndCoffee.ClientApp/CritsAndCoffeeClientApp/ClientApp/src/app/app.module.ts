import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import {
  MatTooltipModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';


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
import { InstagramPostDetailComponent } from './components/instagram-map/instagram-post-detail/instagram-post-detail.component';
import { CritsHeroComponent } from './components/home/crits-hero/crits-hero.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import {InstagramPostListState} from "./state/instagram/instagram.state";



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
    ApiTermsOfUseComponent,
    InstagramPostDetailComponent,
    CritsHeroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FontAwesomeModule,
    NgbModule,
    NgxsModule.forRoot([InstagramPostListState],{developmentMode: true }),
    NgxsLoggerPluginModule.forRoot({}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNPlDnedCEachOH08pszCanYO2RDuJ6pk\n'
    })
  ],
  providers: [],
  entryComponents: [InstagramPostDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
