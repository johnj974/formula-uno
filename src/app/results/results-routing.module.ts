import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainResultsComponent } from './main-results/main-results.component';

const routes: Routes = [{ path: '', component: MainResultsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsRoutingModule {}
