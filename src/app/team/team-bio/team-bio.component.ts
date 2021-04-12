import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.team = this.teamService.onGetTeam(+params.id);
      console.log(this.team);
    });
  }
}
