import { Injectable } from '@angular/core';
import { DriverModel } from '../models/driver.model';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  //.
  driverServiceArray: DriverModel[] = [
    new DriverModel('Lewis Hamilton', 'English', 'Mercedes', 92, 7, 44),
    new DriverModel('Daniel Riccardo', 'Australian', 'McLaren', 9, 0, 3),
  ];

  constructor() {}
}
