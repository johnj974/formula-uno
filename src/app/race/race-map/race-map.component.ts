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

  lati = 51.678418;
  lngi = 7.809007;
  googleMapType = 'satellite';

  receivedArray: string[];
  lat: string;
  long: string;
  coordSubscription: Subscription;

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.coordSubscription = this.resultsService.raceCoords.subscribe(
      (data: string[]) => {
        [this.lat, this.long] = data;
      }
    );
  }

  ngOnDestroy() {
    this.coordSubscription.unsubscribe();
  }
}
