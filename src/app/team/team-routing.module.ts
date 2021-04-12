import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTeamComponent } from './main-team/main-team.component';
import { TeamBioComponent } from './team-bio/team-bio.component';

const routes: Routes = [
  { path: '', component: MainTeamComponent },
  { path: ':teamName', component: TeamBioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
