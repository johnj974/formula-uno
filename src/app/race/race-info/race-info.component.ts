import { Component, OnInit } from '@angular/core';
import { receivedRace } from 'src/app/shared/models/received-race.interface';
import { ResultsService } from 'src/app/shared/services/results.service';

import { RootRace } from '../../shared/interfaces/race-calender';

@Component({
  selector: 'app-race-info',
  templateUrl: './race-info.component.html',
  styleUrls: ['./race-info.component.scss'],
})
export class RaceInfoComponent implements OnInit {
  //.

  todayDate = new Date();
  milliSecondDate = +new Date(this.todayDate);
  //expired: boolean = false;
  raceInfo;
  raceCalenderArray: RootRace[] = [];
  raceName: string;
  lat: number;
  long: number;

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.resultsService.getRaceCalender().subscribe((data) => {
      this.raceInfo = data;
      this.raceCalenderArray = this.raceInfo.MRData.RaceTable.Races;
      console.log(this.raceCalenderArray);
      //this.applyClass();
    });

    console.log(this.milliSecondDate);
  }

  showMap(index: number) {
    const race = this.raceCalenderArray[index];
    this.raceName = race.raceName;
    this.lat = +race.Circuit.Location.lat;
    this.long = +race.Circuit.Location.long;
    console.log(this.raceName, this.lat, this.long);
    this.resultsService.raceCoords.next({
      raceName: this.raceName,
      lat: this.lat,
      long: this.long,
    });
    this.scroll();
  }

  scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  // applyClass() {
  //   for (const race of this.raceCalenderArray) {
  //     let raceDate = +new Date(race.date);
  //     if (this.milliSecondDate > raceDate) {
  //       return 'completed';
  //     } else {
  //       return 'no';
  //     }
  //   }
  // }
}
