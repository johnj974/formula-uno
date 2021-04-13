import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTrackComponent } from './main-track/main-track.component';
import { TrackBioComponent } from './track-bio/track-bio.component';

const routes: Routes = [
  { path: '', component: MainTrackComponent },
  { path: ':id/:trackName', component: TrackBioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackRoutingModule {}
