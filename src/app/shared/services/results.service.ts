import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { mapData } from '../models/map-data.interface';

import { RootDriver } from '../interfaces/driver';
import { RootConstructor } from '../interfaces/constructor';
import { LastResult } from '../interfaces/last-result';
import { RootRace } from '../interfaces/race-calender';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  //.
  raceCoords = new Subject<mapData>();

  constructor(private http: HttpClient) {}

  getResult() {
    return this.http.get<LastResult>(
      'https://ergast.com/api/f1/current/last/results.json'
    );
  }

  getDriverStanding() {
    return this.http.get<RootDriver>(
      'https://ergast.com/api/f1/current/driverStandings.json'
    );
  }

  getTeamStanding() {
    return this.http.get<RootConstructor>(
      'https://ergast.com/api/f1/current/constructorStandings.json'
    );
  }

  getRaceCalender() {
    return this.http.get<RootRace>('https://ergast.com/api/f1/current.json');
  }
}
