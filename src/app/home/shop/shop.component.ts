import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamModel } from 'src/app/shared/models/team.model';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  //.

  receivedArray: TeamModel[] = [];

  constructor(private router: Router, private teamService: TeamService) {}

  ngOnInit(): void {
    this.receivedArray = this.teamService.getTeamArray();
  }

  toShop() {
    this.router.navigate(['/shop']);
  }
}
