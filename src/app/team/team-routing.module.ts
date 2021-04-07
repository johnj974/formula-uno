import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTeamComponent } from './main-team/main-team.component';

const routes: Routes = [{ path: '', component: MainTeamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
