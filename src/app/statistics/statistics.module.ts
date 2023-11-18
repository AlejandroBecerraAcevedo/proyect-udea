import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsDashboardComponent } from './statistics-dashboard/statistics-dashboard.component';


@NgModule({
  declarations: [
    StatisticsDashboardComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
