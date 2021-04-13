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
      'Australia',
      'Melbourne',
      '5.3km',
      50,
      -37.849722,
      144.968333
    ),
    new TrackModel(
      'Autodroma Nazionale di Monza',
      'Italy',
      'Monza',
      '5.793km',
      50,
      45.620556,
      9.289444
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
