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
      80000,
      1,
      'assets/images/Australia_Circuit.png',
      'assets/images/australia.gif'
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
      1,
      'assets/images/monza.png',
      'assets/images/italy.gif'
    ),
    new TrackModel(
      'Circuit de Monaco',
      'Street Circuit',
      'Monte Carlo, Monaco',
      '3.337km',
      78,
      43.734722,
      7.420556,
      77,
      'Clockwise',
      19,
      ' 1929',
      37000,
      1,
      'assets/images/Monoco_Circuit.png',
      'assets/images/monaco.gif'
    ),
    new TrackModel(
      'Circuit Gilles Villeneuve',
      'Street Circuit',
      'Montreal, Canada',
      '4.361',
      70,
      45.500578,
      -73.522461,
      56,
      'Clockwise',
      14,
      ' 1961',
      100000,
      1,
      'assets/images/Canada_Circuit.png',
      'assets/images/canada.gif'
    ),
    new TrackModel(
      'Shanghai International Circuit',
      'Race Circuit',
      'Shanghai, China',
      '5.451',
      56,
      31.338889,
      121.219722,
      16,
      'Clockwise',
      16,
      ' 2004',
      200000,
      1,
      'assets/images/chinese_circuit.png',
      'assets/images/china.gif'
    ),
    new TrackModel(
      'Sochi Autodrom',
      'Race Circuit',
      'Sochi, Russia',
      '5.848',
      53,
      43.410278,
      39.968271,
      9,
      'Clockwise',
      18,
      '21 September 2014',
      55000,
      1,
      'assets/images/Russia_Circuit.png',
      'assets/images/russia.gif'
    ),
    new TrackModel(
      'Circuit Paul Ricard',
      'Race Circuit',
      'Le Castellet, France',
      '5.842',
      53,
      43.250556,
      5.791667,
      16,
      'Clockwise',
      15,
      '19 April 1970',
      90000,
      1,
      'assets/images/france_circuit.png',
      'assets/images/france.gif'
    ),
    new TrackModel(
      'Yas Marina Circuit',
      'Race Circuit',
      'Abu Dhabi, UAE',
      '5.554',
      55,
      24.467222,
      54.603056,
      12,
      'Anti-Clockwise',
      21,
      '7 October 2009',
      60000,
      1,
      'assets/images/Abu_Dhabi_Circuit.png',
      'assets/images/uae.gif'
    ),
    new TrackModel(
      'Miami International Autodome',
      'Street Circuit',
      'Miami USA',
      '5.412',
      57,
      25.5729,
      80.142,
      0,
      'Anti-Clockwise',
      19,
      '6 may 2022',
      80000,
      1,
      'assets/images/miami_curcuit.jpg',
      'assets/images/usa_flag.png'
    ),
    new TrackModel(
      'Imola',
      'Race Circuit',
      'Emilia Romagna Italy',
      '4.909',
      63,
      44.341111,
      11.713333,
      0,
      'Anti-Clockwise',
      19,
      '1953',
      78000,
      1,
      'assets/images/imola_track.png',
      'assets/images/italy.gif'
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
