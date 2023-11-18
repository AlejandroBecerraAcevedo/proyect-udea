/* NgRx */
import { createAction, props } from '@ngrx/store';
import { Entity } from '../models/entity.model';


export const setCurrentEntity = createAction(
    '[Entity] Set Current Entity',
    props<{ currentEntityId: number }>()
);

export const clearCurrentEntity = createAction(
    '[Entity] Clear Current Entity'
);

export const initializeCurrentEntity = createAction(
    '[Entity] Initialize Current Entity'
);

export const loadEntities = createAction(
    '[Entity] Load'
);

export const loadEntitiesSucces = createAction(
    '[Entity] Load Success',
    props<{ entities: Entity[] }>()
);

export const loadEntitiesFailure = createAction(
    '[Entity] Load Fail',
    props<{ error: string }>()
);

export const updateEntity = createAction(
    '[Entity] Update Entity',
    props<{ entity: Entity }>()
);

export const updateEntitySuccess = createAction(
    '[Entity] Update Entity Success',
    props<{ entity: Entity }>()
);

export const updateEntityFailure = createAction(
    '[Entity] Update Entity Fail',
    props<{ error: string }>()
);

export const createEntity = createAction(
    '[Entity] Create Entity',
    props<{ entity: Entity }>()
  );

  export const createEntitySuccess = createAction(
    '[Entity] Create Entity Success',
    props<{ entity: Entity }>()
  );

  export const createEntityFailure = createAction(
    '[Entity] Create Entity Fail',
    props<{ error: string }>()
  );

  export const deleteEntity = createAction(
    '[Entity] Delete Entity',
    props<{ entityId: number }>()
  );

  export const deleteEntitySuccess = createAction(
    '[Entity] Delete Entity Success',
    props<{ entityId: number }>()
  );

  export const deleteEntityFailure = createAction(
    '[Entity] Delete Entity Fail',
    props<{ error: string }>()
  );



 



