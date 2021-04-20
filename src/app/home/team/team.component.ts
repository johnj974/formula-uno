import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamModel } from 'src/app/shared/models/team.model';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  //.

  team: TeamModel;
  receivedTeamArray: TeamModel[] = [];

  constructor(private router: Router, private teamService: TeamService) {}

  ngOnInit(): void {
    this.receivedTeamArray = this.teamService.getTeamArray();
    this.selectTeam();
  }

  toTeams() {
    this.router.navigate(['/teams']);
  }

  // display a differant team on load
  selectTeam() {
    let selectNumber = Math.floor(
      Math.random() * this.receivedTeamArray.length
    );
    this.team = this.receivedTeamArray[selectNumber];
  }
}
