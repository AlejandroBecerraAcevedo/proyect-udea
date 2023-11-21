import { createAction, props } from "@ngrx/store";
import { Statistic } from "../models/statistic.model";


export const loadStatitics = createAction(
    '[Statistic] Load',
    props<{idAcademicUnit?: number  , idProgram?: number}>()
);

export const loadStatiticsSucces = createAction(
    '[Statistic] Load Succes',
    props<{statistics: Statistic}>()
);


