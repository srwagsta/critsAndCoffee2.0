import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramRoutingModule } from './instagram-routing.module';
import { AgmCoreModule } from '@agm/core';
import { NgxsModule } from '@ngxs/store';
import { InstagramPostListState } from './state/instagram.state';
import { InstagramPostDetailComponent } from './components/instagram-map/instagram-post-detail/instagram-post-detail.component';
import { InstagramMapComponent } from './components/instagram-map/instagram-map.component';
//Material
import {
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [InstagramPostDetailComponent, InstagramMapComponent],
  imports: [
    CommonModule,
    InstagramRoutingModule,
    NgxsModule.forFeature([InstagramPostListState]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNPlDnedCEachOH08pszCanYO2RDuJ6pk\n'
    }),
    MatIconModule
  ],
  entryComponents: [InstagramPostDetailComponent]
})
export class InstagramModule { }
