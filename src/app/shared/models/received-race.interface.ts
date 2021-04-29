export interface receivedRace {
  raceName: string;
  Circuit: {
    Location: {
      lat: string;
      long: string;
    };
    circuitName: string;
  };
  round: string;
  date: string;
  time: string;
}
