
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StatisticsState } from "./statistic.reducer";

const getStatisticsState = createFeatureSelector<StatisticsState>('statistics');

export const getStatistic = createSelector(
    getStatisticsState,
    state => state.statistics
);