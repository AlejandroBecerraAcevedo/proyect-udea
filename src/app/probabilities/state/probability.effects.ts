import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as ProbabilityActions from '../state/probility.action'
import { map, mergeMap } from "rxjs";
import { ProbabilityService } from "../service/probability.service";


@Injectable()
export class ProbabiltyEffects {
    constructor(private actions$: Actions, private probabiltyService: ProbabilityService) { }
    
    calculateProbability$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProbabilityActions.calcultateProbability),
            mergeMap((action) => this.probabiltyService.calculateProbability(action.requestProbability)
                .pipe(
                    map(probability => ProbabilityActions.calcultateProbabilitySuccess({probability}))
                )
            )
        );
    });

}