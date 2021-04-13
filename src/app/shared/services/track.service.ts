import { Injectable } from '@angular/core';
import { TrackModel } from '../models/track.model';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  //.

  trackServiceArray: TrackModel[] = [
    new TrackModel(
      'Albert Park',
      'Street circuit',
      'Melbourne, Austrailia',
      '5.28km',
      58,
      -37.849722,
      144.968333,
      24,
      'Clockwise',
      14,
      '20 November 1953',
      800000,
      1
    ),
    new TrackModel(
      'Autodroma Nazionale di Monza',
      'Race Circuit',
      'Monza, Italy',
      '5.793km',
      53,
      45.620556,
      9.289444,
      70,
      'Clockwise',
      11,
      '3 September 1922',
      118865,
      1
    ),
  ];

  getTrackArray() {
    return this.trackServiceArray.slice();
  }

  onGetTrack(id: number) {
    return this.trackServiceArray[id];
  }

  constructor() {}
}
