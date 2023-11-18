import { Entity } from "../models/entity.model";
import * as AppState from "../../state/app.state";
import * as EntityActions from "../state/entity.actions";

import { createReducer, on } from "@ngrx/store";

export interface State extends AppState.State{
    entities: EntityState
}

export interface EntityState {
    currentEntityId: number | null,
    entities: Entity[],
    error: string
}

const InitialState: EntityState= {
    currentEntityId: null,
    entities: [],
    error: ''
}

export const entityReducer = createReducer<EntityState>(
    InitialState,
    on(EntityActions.loadEntitiesSucces, (state, action): EntityState => {
        return {
            ...state,
            entities: action.entities,
            error: ''
        }
    }),
    on(EntityActions.loadEntitiesFailure, (state, action): EntityState => {
        return {
            ...state,
            entities: [],
            error: action.error
        }
    }),
    on(EntityActions.setCurrentEntity, (state, action):  EntityState => {
        return {
            ...state,
            currentEntityId: action.currentEntityId
        }
    }),
    on(EntityActions.initializeCurrentEntity, (state):  EntityState => {
        return {
            ...state,
            currentEntityId: 0
        }
    }),
    on(EntityActions.clearCurrentEntity, (state): EntityState => {
        return {
            ...state,
            currentEntityId: null
        }
    }),
    on(EntityActions.createEntitySuccess, (state, action): EntityState => {
        return {
            ...state,
            currentEntityId: null,
            entities: [...state.entities, action.entity],
            error: ''
        }
    } ),
    on(EntityActions.updateEntitySuccess, (state, action):  EntityState => {
        const updateEntity = state.entities.map(
            item => action.entity.id === item.id ? action.entity: item
        );
        return {
            ...state,
            currentEntityId: null,
            entities :updateEntity,
            error: ''
        }
    }),
    on(EntityActions.deleteEntitySuccess, (state, action): EntityState => {
        return {
          ...state,
          entities: state.entities.filter(entity => entity.id !== action.entityId),
          currentEntityId: null,
          error: ''
        };
      }),

);