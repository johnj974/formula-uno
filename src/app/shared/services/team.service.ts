import { Injectable } from '@angular/core';
import { TeamModel } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  //.

  teamServiceArray: TeamModel[] = [
    new TeamModel(
      'Scuderia Ferrari',
      16,
      'SF21',
      'Mattia Binotto',
      ['Charles LeClerc', ' Carlos Sainz Jr'],
      'Maranello, Italy',
      ['Shell', 'Ray-Ban', 'Kaspersky Lab'],
      'Ferrari',
      238,
      15,
      '1950 Monaco'
    ),
    new TeamModel(
      'Williams Racing',
      9,
      'FW43B',
      'Simon Roberts',
      ['George Russell', ' Nicolas Latifi'],
      'Oxfordshire, England',
      ['Acronis', 'Versa'],
      'Mercedes',
      114,
      7,
      '1978 Argentina'
    ),
    new TeamModel(
      'McLaren F1 Team',
      8,
      'MCL35M',
      'Zak Brown',
      ['Daniel Riccardo', ' Lando Norris'],
      'Surrey, England',
      ['Acronis', 'Versa'],
      'Mercedes',
      182,
      12,
      '1966 Monaco'
    ),
  ];

  getTeamArray() {
    return this.teamServiceArray.slice();
  }

  onGetTeam(id: number) {
    return this.teamServiceArray[id];
  }
  constructor() {}
}
