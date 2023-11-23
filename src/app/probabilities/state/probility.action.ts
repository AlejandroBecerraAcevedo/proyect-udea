import { createAction, props } from "@ngrx/store";
import { RequestProbabiity } from "../models/request-probability";

export const calcultateProbability = createAction(
    '[Probaility] calculated',
    props<{requestProbability: RequestProbabiity}>()
);

export const calcultateProbabilitySuccess = createAction(
    '[Probaility] Calculated Success',
     props<{probability: number}>()
)