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
      ['Charles LeClerc', 'Carlos Sainz Jr'],
      'Maranello, Italy',
      ['Shell', 'Ray-Ban', 'Kaspersky Lab']
    ),
    new TeamModel(
      'Williams Racing',
      9,
      'FW43B',
      'Simon Roberts',
      ['George Russell', 'Nicolas Latifi'],
      'Oxfordshire, England',
      ['Acronis', 'Versa']
    ),
    new TeamModel(
      'McLaren F1 Team',
      8,
      'MCL35M',
      'Zak Brown',
      ['Daniel Riccardo', 'Lando Norris'],
      'Surrey, England',
      ['Acronis', 'Versa']
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
