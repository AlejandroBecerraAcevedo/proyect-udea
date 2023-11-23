import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/probability.reducer';
import * as ProbabilityActions from '../state/probility.action';
import { RequestProbabiity } from '../models/request-probability';

@Component({
  selector: 'app-probabilities-dashboard',
  templateUrl: './probabilities-dashboard.component.html',
  styleUrls: ['./probabilities-dashboard.component.css']
})
export class ProbabilitiesDashboardComponent {


  constructor(private store: Store<State>) {}

  onCalculateProbability(){
    console.log('aca inicia');
      this.store.dispatch(ProbabilityActions.calcultateProbability(
        {requestProbability: {} as RequestProbabiity}
      ))
  }
}
