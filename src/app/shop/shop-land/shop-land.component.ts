import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeamModel } from 'src/app/shared/models/team.model';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-shop-land',
  templateUrl: './shop-land.component.html',
  styleUrls: ['./shop-land.component.scss'],
})
export class ShopLandComponent implements OnInit, OnDestroy {
  //.
  shopSub: Subscription;
  receivedTeam: TeamModel;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.shopSub = this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.receivedTeam = this.teamService.onGetTeam(params.id);
    });
  }

  ngOnDestroy() {
    this.shopSub.unsubscribe();
  }
}
