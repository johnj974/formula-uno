import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/shared/services/results.service';

import { RootDriver } from '../../shared/interfaces/driver';

@Component({
  selector: 'app-driver-result',
  templateUrl: './driver-result.component.html',
  styleUrls: ['./driver-result.component.scss'],
})
export class DriverResultComponent implements OnInit {
  //.

  receivedData;
  driverStandingArray: RootDriver[] = [];

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.resultsService.getDriverStanding().subscribe((data) => {
      this.receivedData = data;
      this.driverStandingArray =
        this.receivedData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  }
}
