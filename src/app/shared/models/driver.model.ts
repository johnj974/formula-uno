export class DriverModel {
  constructor(
    public name: string,
    public nationality: string,
    public team: string,
    public wins: number,
    public worldTitles: number,
    public raceNumber: number
  ) {}
}
