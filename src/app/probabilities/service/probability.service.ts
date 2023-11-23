import { Injectable } from '@angular/core';
import { RequestProbabiity } from '../models/request-probability';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProbabilityService {
  constructor() { }
  calculateProbability(requestProbability: RequestProbabiity): Observable<number>{
    return of(95);
  }
  
}
