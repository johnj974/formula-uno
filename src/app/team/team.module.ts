import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { MainTeamComponent } from './main-team/main-team.component';
import { TeamInfoComponent } from './team-info/team-info.component';

@NgModule({
  declarations: [MainTeamComponent, TeamInfoComponent],
  imports: [CommonModule, TeamRoutingModule],
})
export class TeamModule {}
