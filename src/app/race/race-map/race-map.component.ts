import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResultsService } from 'src/app/shared/services/results.service';
import { google } from 'google-maps';

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
  lat: number = 53.1424;
  long: number = -7.6921;

  coordSubscription: Subscription;

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.coordSubscription = this.resultsService.raceCoords.subscribe(
      (data: number[]) => {
        [this.lat, this.long] = data;
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
