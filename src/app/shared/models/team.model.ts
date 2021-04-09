export class TeamModel {
  public name: string;
  public constructorTitles: number;
  public car: string;
  public teamDirector: string;
  public drivers: string[];
  public homeBase: string;
  public sponsors: string[];

  constructor(
    name: string,
    constructorTitles: number,
    car: string,
    teamDirector: string,
    drivers: string[],
    homeBase: string,
    sponsors: string[]
  ) {
    this.name = name;
    this.constructorTitles = constructorTitles;
    this.car = car;
    this.teamDirector = teamDirector;
    this.drivers = drivers;
    this.homeBase = homeBase;
    this.sponsors = sponsors;
  }
}