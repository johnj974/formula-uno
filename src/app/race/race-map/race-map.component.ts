import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResultsService } from 'src/app/shared/services/results.service';
import { google } from 'google-maps';
import { mapData } from 'src/app/shared/models/map-data.interface';

@Component({
  selector: 'app-race-map',
  templateUrl: './race-map.component.html',
  styleUrls: ['./race-map.component.scss'],
})
export class RaceMapComponent implements OnInit, OnDestroy {
  //.

  markerDisplay = false;
  googleMapType = 'satellite';

  receivedArray: string[];
  raceName: string = 'Track Locator';
  lat: number = 53.1424;
  long: number = -7.6921;

  coordSubscription: Subscription;

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.coordSubscription = this.resultsService.raceCoords.subscribe(
      (data: mapData) => {
        console.log(data);
        this.raceName = data.raceName;
        this.lat = data.lat;
        this.long = data.long;
        this.markerDisplay = true;
      }
    );
  }

  changeMap() {
    if (this.googleMapType === 'satellite') {
      this.googleMapType = 'hybrid';
    } else {
      this.googleMapType = 'satellite';
    }
  }

  ngOnDestroy() {
    this.coordSubscription.unsubscribe();
  }
}
