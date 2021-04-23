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
  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.resultsService.getResult().subscribe((data) => {
      this.result = data;
      this.raceResultArray = this.result.MRData.RaceTable.Races[0].Results;
      console.log(this.raceResultArray);
    });
  }
}
