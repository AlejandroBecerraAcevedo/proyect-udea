import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EntitiesModule } from './entities/entities.module';

const routes: Routes = [
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    SharedModule,
    EntitiesModule,
    DashboardModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
