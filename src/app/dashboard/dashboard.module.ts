import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { dashBoardReducer } from './state/dashboard.reducer';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashBoard', dashBoardReducer )
  ]
})
export class DashboardModule { }
