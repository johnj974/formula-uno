import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRaceComponent } from './main-race/main-race.component';

const routes: Routes = [
  {
    path: '',
    component: MainRaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaceRoutingModule {}
