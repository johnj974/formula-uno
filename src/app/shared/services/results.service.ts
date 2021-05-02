import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { mapData } from '../models/map-data.interface';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  //.
  raceCoords = new Subject<mapData>();

  constructor(private http: HttpClient) {}

  getResult() {
    return this.http.get('https://ergast.com/api/f1/current/last/results.json');
  }

  getDriverStanding() {
    return this.http.get(
      'https://ergast.com/api/f1/current/driverStandings.json'
    );
  }

  getTeamStanding() {
    return this.http.get(
      'https://ergast.com/api/f1/current/constructorStandings.json'
    );
  }

  getRaceCalender() {
    return this.http.get('https://ergast.com/api/f1/current.json');
  }
}
