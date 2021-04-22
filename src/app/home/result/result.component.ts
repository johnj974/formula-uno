import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from 'src/app/shared/services/results.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  //.
  raceName: string = '';
  round: string = '';
  results;
  resultsArray: {}[] = [];

  constructor(private router: Router, private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.resultsService.getResult().subscribe((data) => {
      this.results = data;
      //console.log(this.results.MRData.RaceTable.Races[0]);
      this.raceName = this.results.MRData.RaceTable.Races[0].raceName;
      this.round = this.results.MRData.RaceTable.Races[0].round;
      this.resultsArray = this.results.MRData.RaceTable.Races[0].Results;
      console.log(this.resultsArray);
    });
  }

  toResults() {
    this.router.navigate(['/results']);
  }
}
