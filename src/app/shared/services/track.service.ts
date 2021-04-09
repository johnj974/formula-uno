import { Injectable } from '@angular/core';
import { TrackModel } from '../models/track.model';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  //.

  trackServiceArray: TrackModel[] = [
    new TrackModel('Albert Park', 'Australia', 'Melbourne', '5.3km', 50),
    new TrackModel(
      'Autodroma Nazionale di Monza',
      'Italy',
      'Monza',
      '5.793km',
      50
    ),
  ];

  getTrackArray() {
    return this.trackServiceArray.slice();
  }

  constructor() {}
}
