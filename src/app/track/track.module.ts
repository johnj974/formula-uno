import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { MainTrackComponent } from './main-track/main-track.component';
import { TrackInfoComponent } from './track-info/track-info.component';
import { TrackBioComponent } from './track-bio/track-bio.component';
import { TrackMapComponent } from './track-map/track-map.component';


@NgModule({
  declarations: [
    MainTrackComponent,
    TrackInfoComponent,
    TrackBioComponent,
    TrackMapComponent
  ],
  imports: [
    CommonModule,
    TrackRoutingModule
  ]
})
export class TrackModule { }
