import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AboutComponent,
  PageNotFoundComponent,
  HomeComponent,
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

  // Auth routes
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
  // },

// Feature component routes
  {
    path: 'instagram-map',
    loadChildren: () => import('./modules/instagram/instagram.module').then(mod => mod.InstagramModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./modules/legal/legal.module').then(mod => mod.LegalModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'game-of-life',
    component: GameOfLifeComponent
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
