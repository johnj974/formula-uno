import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/shared/services/results.service';

@Component({
  selector: 'app-last-result',
  templateUrl: './last-result.component.html',
  styleUrls: ['./last-result.component.scss'],
})
export class LastResultComponent implements OnInit {
  //.
  result;
  raceResultArray: [] = [];
  raceName: string = '';
  round: string = '';
  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.resultsService.getResult().subscribe((data) => {
      this.result = data;
      this.raceName = this.result.MRData.RaceTable.Races[0].raceName;
      this.round = this.result.MRData.RaceTable.Races[0].round;
      this.raceResultArray = this.result.MRData.RaceTable.Races[0].Results;
      //console.log(this.raceResultArray);
    });
  }
}
