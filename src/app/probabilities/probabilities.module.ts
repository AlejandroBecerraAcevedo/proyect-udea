import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProbabilitiesRoutingModule } from './probabilities-routing.module';
import { ProbabilitiesDashboardComponent } from './probabilities-dashboard/probabilities-dashboard.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { probabilityReducer } from './state/probability.reducer';
import { ProbabiltyEffects } from './state/probability.effects';


@NgModule({
  declarations: [
    ProbabilitiesDashboardComponent
  ],
  imports: [
    CommonModule,
    ProbabilitiesRoutingModule,
    SharedModule,
    MaterialModule,
    StoreModule.forFeature('probabilities', probabilityReducer),
    EffectsModule.forFeature([ProbabiltyEffects])
  ]
})
export class ProbabilitiesModule { }
