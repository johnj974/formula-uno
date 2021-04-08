import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { MainTeamComponent } from './main-team/main-team.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    MainTeamComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
