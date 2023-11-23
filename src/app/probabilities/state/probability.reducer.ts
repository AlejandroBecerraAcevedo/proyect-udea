
import { createReducer, on } from "@ngrx/store";
import * as AppState from "../../state/app.state";
import * as ProbabilityActions from '../state/probility.action'

export interface State extends AppState.State {
    probabilityState: ProbabilityState
};

export interface ProbabilityState{

    probability: number | null;
    error: string;
};

const InitialState: ProbabilityState = {
     probability: null,
     error: ''
}

export const probabilityReducer = createReducer<ProbabilityState>(
    InitialState,
    on(ProbabilityActions.calcultateProbabilitySuccess, (state, action): ProbabilityState => {
        console.log('aca finaliza');
        return {...state, error: '', probability: action.probability };
    })
)                  

