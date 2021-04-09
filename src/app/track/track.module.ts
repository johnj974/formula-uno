import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { MainTrackComponent } from './main-track/main-track.component';
import { TrackInfoComponent } from './track-info/track-info.component';


@NgModule({
  declarations: [
    MainTrackComponent,
    TrackInfoComponent
  ],
  imports: [
    CommonModule,
    TrackRoutingModule
  ]
})
export class TrackModule { }
