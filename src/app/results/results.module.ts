import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { MainResultsComponent } from './main-results/main-results.component';
import { LastResultComponent } from './last-result/last-result.component';
import { DriverResultComponent } from './driver-result/driver-result.component';
import { ConstructorResultComponent } from './constructor-result/constructor-result.component';


@NgModule({
  declarations: [
    MainResultsComponent,
    LastResultComponent,
    DriverResultComponent,
    ConstructorResultComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
