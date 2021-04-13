export class TrackModel {
  constructor(
    public name: string,
    public type: string,
    public location: string,
    public distance: string,
    public laps: number,
    public latitude: number,
    public longitude: number,
    public appearences: number,
    public direction: string,
    public turns: number,
    public opened: string,
    public capacity: number,
    public grade: number
  ) {}
}
