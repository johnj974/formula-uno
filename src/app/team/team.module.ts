import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { MainTeamComponent } from './main-team/main-team.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { TeamBioComponent } from './team-bio/team-bio.component';

@NgModule({
  declarations: [MainTeamComponent, TeamInfoComponent, TeamBioComponent],
  imports: [CommonModule, TeamRoutingModule],
})
export class TeamModule {}
