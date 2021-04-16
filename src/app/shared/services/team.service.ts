import { Injectable } from '@angular/core';
import { TeamModel } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  //.

  teamServiceArray: TeamModel[] = [
    new TeamModel(
      'Ferrari Scuderia Mission Winnow',
      16,
      'Ferrari SF21',
      'Mattia Binotto',
      ['Charles LeClerc', ' Carlos Sainz Jr'],
      'Maranello, Italy',
      'assets/images/ferrari-team.jpg',
      'Ferrari 065/6',
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
      'assets/images/williams-team.jpg',
      'Mercedes M12E Performance',
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
      'assets/images/williams-team.jpg',
      'Mercedes-AMG F1 M12 E Performance',
      182,
      12,
      '1966 Monaco'
    ),
    new TeamModel(
      'Aston Martin Cognizant F1 Team',
      0,
      'AMR21',
      'Otmar Szafnauer',
      ['Lance Stroll', ' Sebastian Vettel'],
      'Silverstone, England',
      'assets/images/aston-team.jpg',
      'Mercedes',
      0,
      0,
      '1959 Dutch'
    ),
    new TeamModel(
      'Alpine F1 Team',
      0,
      'A521',
      'Davide Brivio',
      ['Fernando Alonso', ' Esteban Ocon'],
      'Oxfordshire, England',
      'assets/images/alpine-team.jpg',
      'Renault E-Tech 20B',
      0,
      0,
      '2021 Bahrain'
    ),
    new TeamModel(
      'Alpha Romeo Racing Orlen',
      0,
      'C41',
      'Frederic Vasseur',
      ['Kimi Raikkonen', ' Antonio Giovanazzi'],
      'Zurich, Switzerland',
      'assets/images/alpha-team.jpg',
      'Ferrari 065/6',
      10,
      2,
      '1950 British'
    ),
    new TeamModel(
      'Red Bull Racing Honda',
      4,
      'RB16B',
      'Christian Horner',
      ['Sergio Perez', ' Max Verstappen'],
      'Milton Keynes, England',
      'assets/images/bull-team.jpg',
      'Honda RA621H',
      64,
      4,
      '2005 Australia'
    ),

    new TeamModel(
      'Mercedes AMG Petronas F1 Team',
      7,
      'F1 W12 E Performance',
      'Toto Wolff',
      ['Lewis Hamilton', ' Valterri Bottas'],
      'Northamptonshire, England',
      'assets/images/alpine-team.jpg',
      'Mercedes M12 E Performance',
      116,
      9,
      '1954 French'
    ),

    new TeamModel(
      'Uralkali Haas F1 Team',
      0,
      'VF-21',
      'Guenther Steiner',
      ['Mick Schumacher', ' Nikita Mazepin'],
      'North Carolina, USA',
      'assets/images/haas-team.png',
      'Ferrari 065/6',
      0,
      0,
      '2016 Australia'
    ),
    new TeamModel(
      'Alpha Tauri Scuderia Honda',
      0,
      'Alpha Tauri AT02',
      'Franz Tost',
      ['Pierre Gasly', ' Yuki Tsunoda'],
      'Faenza, Italy',
      'assets/images/alpine-team.jpg',
      'Honda RA621H',
      1,
      0,
      '2020 Austrian'
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
