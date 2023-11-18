import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EntityService } from "../services/entity.service";

import * as EntityActions from '../state/entity.actions';
import { map, mergeMap } from "rxjs";


@Injectable()
export class EntityEffects {

    constructor(private actions$: Actions, private entityService: EntityService) { }

    loadEnities$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EntityActions.loadEntities),
            mergeMap(() => this.entityService.getAll()
                .pipe(
                    map(entities => EntityActions.loadEntitiesSucces({ entities }))
                )
            )
        );
    });

    createProduct = createEffect(() => {
        return this.actions$.pipe(
            ofType(EntityActions.createEntity),
            mergeMap((action) => this.entityService.create(action.entity)
                .pipe(
                    map(entity => EntityActions.createEntitySuccess({ entity }))
                )
            )
        )
    });

    updateProduct = createEffect(() => {
        return this.actions$.pipe(
            ofType(EntityActions.updateEntity),
            mergeMap((action) => this.entityService.update(action.entity)
                .pipe(
                    map(entity => EntityActions.updateEntitySuccess({ entity }))
                )
            )
        )
    });

    deleteEntity = createEffect(() => {
        return this.actions$.pipe(
            ofType(EntityActions.deleteEntity),
            mergeMap((action) => this.entityService.delete(action.entityId)
                .pipe(
                    map(() => EntityActions.deleteEntitySuccess({ entityId: action.entityId }))
                )
            )
        )
    });
}