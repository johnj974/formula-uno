import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/shared/services/results.service';

export interface receivedRace {
  raceName: string;
  Circuit: {
    Location: {
      lat: string;
      long: string;
    };
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

  todayDate = new Date();
  milliSecondDate = +new Date(this.todayDate);
  raceInfo;
  raceCalenderArray: receivedRace[] = [];
  lat: string;
  long: string;

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.resultsService.getRaceCalender().subscribe((data) => {
      this.raceInfo = data;
      this.raceCalenderArray = this.raceInfo.MRData.RaceTable.Races;
      console.log(this.raceCalenderArray);
    });

    console.log(this.milliSecondDate);
  }

  showMap(index: number) {
    const race = this.raceCalenderArray[index];
    this.lat = race.Circuit.Location.lat;
    this.long = race.Circuit.Location.long;
    console.log(this.lat, this.long);
    this.resultsService.raceCoords.next([this.lat, this.long]);
  }
}
