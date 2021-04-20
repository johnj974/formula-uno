import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeamModel } from 'src/app/shared/models/team.model';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-team-bio',
  templateUrl: './team-bio.component.html',
  styleUrls: ['./team-bio.component.scss'],
})
export class TeamBioComponent implements OnInit {
  //.
  team: TeamModel;
  teamList: TeamModel[] = [];

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.team = this.teamService.onGetTeam(+params.id);
    });

    this.teamList = this.teamService.getTeamArray();
  }

  onChangeTeam(id: number, name: string) {
    this.router.navigate(['teams', id, name]);
  }
}
