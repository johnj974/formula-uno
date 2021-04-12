import { Injectable } from '@angular/core';
import { TeamModel } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  //.

  teamServiceArray: TeamModel[] = [
    new TeamModel(
      'Ferrari',
      16,
      'SF21',
      'Mattia Binotto',
      ['Charles LeClerc', 'Carlos Sainz Jr'],
      'Maranello, Italy',
      ['Shell', 'Ray-Ban', 'Kaspersky Lab']
    ),
    new TeamModel(
      'Williams',
      9,
      'FW43B',
      'Simon Roberts',
      ['George Russell', 'Nicolas Latifi'],
      'Oxfordshire, England',
      ['Acronis', 'Versa']
    ),
    new TeamModel(
      'McLaren',
      9,
      'FW43B',
      'Simon Roberts',
      ['Daniel Riccardo', 'Lando Norris'],
      'Oxfordshire, England',
      ['Acronis', 'Versa']
    ),
  ];

  getTeamArray() {
    return this.teamServiceArray.slice();
  }
  constructor() {}
}
