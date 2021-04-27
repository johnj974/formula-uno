import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/shared/services/results.service';

interface receivedRace {
  raceName: string;
  Circuit: {
    circuitName: string;
  };
  round: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-race-info',
  templateUrl: './race-info.component.html',
  styleUrls: ['./race-info.component.scss'],
})
export class RaceInfoComponent implements OnInit {
  //.

  raceInfo;
  raceCalenderArray: [] = [];

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.resultsService.getRaceCalender().subscribe((data) => {
      this.raceInfo = data;
      this.raceCalenderArray = this.raceInfo.MRData.RaceTable.Races;
      console.log(this.raceCalenderArray);
    });
  }
}
