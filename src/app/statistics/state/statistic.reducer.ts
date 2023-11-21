
import { createReducer, on } from "@ngrx/store";
import * as AppState from "../../state/app.state";

import * as StatisticActions from '../state/statistic.actions';
import { Statistic } from "../models/statistic.model";


export interface State extends AppState.State{
    statistics: StatisticsState
}

export interface StatisticsState  {
    statistics: Statistic,
    error: string
}

const InitialState: StatisticsState = {
    statistics: {
        unidadAcademica: '',
        programaAcademico: '',
        total: 1,
        series: []
    },
    error: ''
}

export const statisticReducer = createReducer<StatisticsState>(
    InitialState,
    on(StatisticActions.loadStatiticsSucces, (state, action): StatisticsState => {
        return {...state, statistics: {...action.statistics}, error: ''}
    })
)
