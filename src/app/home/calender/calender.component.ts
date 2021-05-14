import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from 'src/app/shared/services/results.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  //.
  calender;
  calenderArray: [] = [];
  receivedRace = {
    raceName: 'Monaco Grand Prix',
    Circuit: {
      circuitName: 'Circuit de Monaco',
    },
    round: '5',
    date: 'May 23, 2021',
    time: '13:00',
  };

  constructor(private resultsService: ResultsService, private router: Router) {}

  randomRace(arr) {
    let num = Math.floor(Math.random() * arr.length);
    this.receivedRace = arr[num];
  }

  ngOnInit(): void {
    this.resultsService.getRaceCalender().subscribe((data) => {
      this.calender = data;
      //console.log(this.calender.MRData.RaceTable.Races);
      this.calenderArray = this.calender.MRData.RaceTable.Races;
      this.randomRace(this.calenderArray);
    });
  }

  toRaces() {
    this.router.navigate(['races']);
  }
}
