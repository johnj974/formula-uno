import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  constructor(private http: HttpClient) {}

  getResult() {
    return this.http.get('http://ergast.com/api/f1/current/last/results');
  }
}
