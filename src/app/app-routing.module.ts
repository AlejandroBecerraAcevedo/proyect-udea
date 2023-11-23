import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EntitiesModule } from './entities/entities.module';
import { StatisticsModule } from './statistics/statistics.module';
import { ProbabilitiesModule } from './probabilities/probabilities.module';

const routes: Routes = [
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    SharedModule,
    EntitiesModule,
    DashboardModule,
    StatisticsModule,
    ProbabilitiesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
