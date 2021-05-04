import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamModel } from 'src/app/shared/models/team.model';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.component.html',
  styleUrls: ['./main-shop.component.scss'],
})
export class MainShopComponent implements OnInit {
  //.

  receivedTeam: TeamModel[];

  constructor(private teamService: TeamService, private router: Router) {}

  ngOnInit(): void {
    this.receivedTeam = this.teamService.getTeamArray();
    console.log(this.receivedTeam);
  }

  toTeamShop(id: number, team: string) {
    this.router.navigate(['shop', id, team]);
    console.log(id, team);
  }
}
