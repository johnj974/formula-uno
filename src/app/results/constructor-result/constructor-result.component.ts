import { Component, OnInit } from '@angular/core';

import { ResultsService } from 'src/app/shared/services/results.service';

@Component({
  selector: 'app-constructor-result',
  templateUrl: './constructor-result.component.html',
  styleUrls: ['./constructor-result.component.scss'],
})
export class ConstructorResultComponent implements OnInit {
  //.

  results;
  teamStandArray: [] = [];
  season: string = '';
  rounds: string = '';

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.resultsService.getTeamStanding().subscribe((data) => {
      this.results = data;
      this.season = this.results.MRData.StandingsTable.season;
      this.rounds = this.results.MRData.StandingsTable.StandingsLists[0].round;
      this.teamStandArray =
        this.results.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    });
  }
}
