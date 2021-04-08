import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { TeamComponent } from './team/team.component';
import { TrackComponent } from './track/track.component';
import { ResultComponent } from './result/result.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    MainHomeComponent,
    TeamComponent,
    TrackComponent,
    ResultComponent,
    ShopComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
