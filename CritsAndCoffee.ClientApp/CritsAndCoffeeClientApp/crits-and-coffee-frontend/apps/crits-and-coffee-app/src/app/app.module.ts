// Modules

// tslint:disable-next-line:nx-enforce-module-boundaries
import { GameOfLifeApp } from '../../../game-of-life/src/app/app.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';

//Logging
import * as Sentry from "@sentry/browser";
import { SentryErrorHandler } from './services/sentryErrorHandler.service';

import {
  MatTooltipModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule
} from '@angular/material';

// Custom modules
import { UiModule } from './modules/ui/ui.module';

// Font awesome icons
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

// Components
import { AppComponent } from './components/app-root/app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InstagramMapComponent } from './components/instagram-map/instagram-map.component';
import {
  PrivacyPolicyComponent,
  CopyrightPolicyComponent,
  ProjectLicenseComponent,
  ApiTermsOfUseComponent } from './components/legal-documents';
import { InstagramPostDetailComponent } from './components/instagram-map/instagram-post-detail/instagram-post-detail.component';
import { CritsHeroComponent } from './components/home/crits-hero/crits-hero.component';

// Auth Components
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PasswordResetComponent } from './components/auth/password-reset/password-reset.component';
import { PasswordChangeComponent } from './components/auth/password-change/password-change.component';

// ngxs plugins
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

// States
import {InstagramPostListState} from "./state/instagram/instagram.state";
import {AuthState} from "./state/auth/auth.state";


Sentry.init({
  dsn: "https://3d288dd060d947789b0e3dcc380efb2f@sentry.io/1444294"
});

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
    CritsHeroComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    PasswordResetComponent,
    PasswordChangeComponent
  ],
  imports: [
    GameOfLifeApp.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    FontAwesomeModule,
    NgbModule,
    NgxsModule.forRoot([AuthState, InstagramPostListState],{developmentMode: !environment.production }),
    NgxsLoggerPluginModule.forRoot({}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNPlDnedCEachOH08pszCanYO2RDuJ6pk\n'
    })
  ],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
  entryComponents: [InstagramPostDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
