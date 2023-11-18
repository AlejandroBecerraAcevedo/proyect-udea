import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { EntityListComponent } from './entity-list/entity-list.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { entityReducer } from './state/entity.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EntityEffects } from './state/entity,effects';
import { MaterialModule } from '../material/material.module';
import { CreateEntityComponent } from './create-entity/create-entity.component';
import { DeleteEntityComponent } from './delete-entity/delete-entity.component';


@NgModule({
  declarations: [
    EntityListComponent,
    CreateEntityComponent,
    DeleteEntityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    EntitiesRoutingModule,
    StoreModule.forFeature('entities', entityReducer),
    EffectsModule.forFeature([EntityEffects])
  ]
})
export class EntitiesModule { }
