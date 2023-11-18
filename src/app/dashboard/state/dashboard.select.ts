import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { DashboardState } from "./dashboard.reducer";

const getDashBoardFeatureState = createFeatureSelector<DashboardState>('dashBoard');

export const getSowSideBar = createSelector(
    getDashBoardFeatureState,
    state => state.showSideBar
);