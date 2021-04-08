import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/app/shared/models/team.model';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  //.

  teamInfoArray: TeamModel[];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamInfoArray = this.teamService.getTeamArray();
  }
}
