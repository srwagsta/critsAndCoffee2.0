// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';

//Logging
import * as Sentry from '@sentry/browser';
import { SentryErrorHandler } from './services/sentryErrorHandler.service';

//Material
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';

// Custom Libraries
import { GameOfLifeModule } from '@CritsAndCoffee/game-of-life';

// Custom modules
import { UiModule } from './modules/ui/ui.module';

// Font awesome icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

// Components
import {
  AppComponent,
  HomeComponent,
  AboutComponent,
  GameOfLifeComponent,
  PageNotFoundComponent,
  InstagramMapComponent,
  PrivacyPolicyComponent,
  CopyrightPolicyComponent,
  ProjectLicenseComponent,
  ApiTermsOfUseComponent
} from './components';
import { InstagramPostDetailComponent } from './components/instagram-map/instagram-post-detail/instagram-post-detail.component';
import { CritsHeroComponent } from './components/home/crits-hero/crits-hero.component';

// ngxs plugins
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

// States
import { InstagramPostListState } from './state/instagram/instagram.state';
import { AuthService } from './modules/auth/services/auth.service';


Sentry.init({
  dsn: environment.production ? 'https://3d288dd060d947789b0e3dcc380efb2f@sentry.io/1444294' : ''
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
    GameOfLifeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GameOfLifeModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatSnackBarModule,
    FontAwesomeModule,
    NgbModule,
    NgxsModule.forRoot([InstagramPostListState], { developmentMode: !environment.production }),
    NgxsLoggerPluginModule.forRoot({}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['auth.access_token', 'auth.refresh_token']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNPlDnedCEachOH08pszCanYO2RDuJ6pk\n'
    })
  ],
  providers: [
    AuthService,
    environment.production ? { provide: ErrorHandler, useClass: SentryErrorHandler }: {provide: ErrorHandler, useClass: ErrorHandler}
    ],
  entryComponents: [InstagramPostDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
