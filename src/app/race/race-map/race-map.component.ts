import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResultsService } from 'src/app/shared/services/results.service';

@Component({
  selector: 'app-race-map',
  templateUrl: './race-map.component.html',
  styleUrls: ['./race-map.component.scss'],
})
export class RaceMapComponent implements OnInit, OnDestroy {
  //.
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
