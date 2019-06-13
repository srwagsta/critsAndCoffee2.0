import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstagramMapComponent } from './components/instagram-map/instagram-map.component';

const routes: Routes = [
  {
    path: 'instagram-map',
    component: InstagramMapComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstagramRoutingModule { }
