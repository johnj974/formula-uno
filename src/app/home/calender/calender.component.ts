import { Component, OnInit } from '@angular/core';
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
  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.resultsService.getRaceCalender().subscribe((data) => {
      this.calender = data;
      console.log(this.calender.MRData.RaceTable.Races);
    });
  }
}
