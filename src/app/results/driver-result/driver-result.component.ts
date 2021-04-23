import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/shared/services/results.service';

@Component({
  selector: 'app-driver-result',
  templateUrl: './driver-result.component.html',
  styleUrls: ['./driver-result.component.scss'],
})
export class DriverResultComponent implements OnInit {
  //.

  receivedData;
  driverStandingArray: [] = [];

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.resultsService.getDriverStanding().subscribe((data) => {
      this.receivedData = data;
      this.driverStandingArray = this.receivedData.MRData.StandingsTable.StandingsLists[0].DriverStandings;

      //console.log(this.driverStandingArray);
    });
  }

  //let driver of driverStandingArray
  // position   points   wins
  // driver.Driver.givenName
  // driver.Driver.familyName
  // driver.Driver.nationality
  // driver.Driver.permanentNumber
  // driver.Constructors.0.constructorId
}
