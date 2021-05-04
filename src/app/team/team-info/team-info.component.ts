import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private teamService: TeamService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.teamInfoArray = this.teamService.getTeamArray();
  }

  onShowTeam(id: number, teamName: string) {
    let team = teamName.replace(/ /g, '');
    this.router.navigate(['teams', id, team]);
  }
}
