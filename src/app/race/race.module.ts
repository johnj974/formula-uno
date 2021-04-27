import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceRoutingModule } from './race-routing.module';
import { MainRaceComponent } from './main-race/main-race.component';
import { RaceInfoComponent } from './race-info/race-info.component';
import { RaceMapComponent } from './race-map/race-map.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainRaceComponent, RaceInfoComponent, RaceMapComponent],
  imports: [CommonModule, RaceRoutingModule, SharedModule],
})
export class RaceModule {}
