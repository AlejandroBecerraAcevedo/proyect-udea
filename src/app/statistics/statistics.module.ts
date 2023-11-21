import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsDashboardComponent } from './statistics-dashboard/statistics-dashboard.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { statisticReducer } from './state/statistic.reducer';
import { StatisticEffects } from './state/statitics.effects';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ChartComponent } from './chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    StatisticsDashboardComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    StatisticsRoutingModule,
    HighchartsChartModule,
    StoreModule.forFeature('statistics', statisticReducer),
    EffectsModule.forFeature([StatisticEffects])
  ]
})
export class StatisticsModule { }
