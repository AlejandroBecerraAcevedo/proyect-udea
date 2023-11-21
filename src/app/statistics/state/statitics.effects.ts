import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as StatisticActions from '../state/statistic.actions';


import { map, mergeMap } from "rxjs";
import { StatisticsService } from "../services/statistics.service";


@Injectable()
export class StatisticEffects {

    constructor(private actions$: Actions, private statisticsService: StatisticsService) { }

    loadStatistic$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(StatisticActions.loadStatitics),
            mergeMap((action) => this.statisticsService.get(action.idAcademicUnit, action.idProgram)
                .pipe(
                    map(statistics => StatisticActions.loadStatiticsSucces({statistics}) )
                )
            )
        );
    });

    
}