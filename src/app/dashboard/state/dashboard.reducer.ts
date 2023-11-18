import { createReducer, on } from "@ngrx/store";
import * as DashBoardActions from "./dashboard.action";

export interface DashboardState  {
    showSideBar: boolean;
}

const initialState : DashboardState = {
    showSideBar: true
};

export const dashBoardReducer = createReducer<DashboardState>(
    initialState,
    on(DashBoardActions.toggleSideBar, (state): DashboardState => {
        return {
            ...state, showSideBar: !state.showSideBar
        }
    })
);