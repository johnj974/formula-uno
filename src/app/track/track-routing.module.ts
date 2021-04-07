import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTrackComponent } from './main-track/main-track.component';

const routes: Routes = [{ path: '', component: MainTrackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackRoutingModule {}
