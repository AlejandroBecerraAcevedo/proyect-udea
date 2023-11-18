import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState } from "./entity.reducer";


const getEntitityState = createFeatureSelector<EntityState>('entities');

export const getCurrentEntityId = createSelector(
    getEntitityState,
    state => state.currentEntityId
);

export const getEntities = createSelector(
    getEntitityState,
    state => state.entities
);

export const getCurrentEntity = createSelector(
    getEntities,
    getCurrentEntityId,
    (entities, entityCurrentId) => {
        if(entityCurrentId === 0){
            return {
                id: 0,
                name: ''
            }
        } else {
            return entityCurrentId ? entities.find(e => e.id === entityCurrentId): null
        }
    }

);