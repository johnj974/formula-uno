import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/app/shared/models/team.model';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss'],
})
export class TeamInfoComponent implements OnInit {
  //.

  teamInfoArray: TeamModel[];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamInfoArray = this.teamService.getTeamArray();
  }
}
