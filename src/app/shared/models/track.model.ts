export class TrackModel {
  constructor(
    public name: string,
    public country: string,
    public location: string,
    public distance: string,
    public laps: number,
    public latitude: number,
    public longitude: number
  ) {}
}
