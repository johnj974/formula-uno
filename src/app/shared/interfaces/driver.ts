export interface RootDriver {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
