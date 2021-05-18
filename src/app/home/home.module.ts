import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { TeamComponent } from './team/team.component';
import { TrackComponent } from './track/track.component';
import { ResultComponent } from './result/result.component';
import { ShopComponent } from './shop/shop.component';
import { CalenderComponent } from './calender/calender.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainHomeComponent,
    TeamComponent,
    TrackComponent,
    ResultComponent,
    ShopComponent,
    CalenderComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
