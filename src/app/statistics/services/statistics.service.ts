import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Statistic } from '../models/statistic.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  baseUrl = "http://localhost:3000/statistics";

  constructor(private http: HttpClient) { }

  get(idAcademicUnit?: number, idProgram?:number): Observable<Statistic> {
    return of(
      {
        unidadAcademica: '',
        programaAcademico: '',
        total: 3157,
        series: [{
          name: 'Masculino',
          data: [434, 290, 307, 200, 500, 100]
        }, {
          name: 'Femenino',
          data: [272, 153, 156, 300, 345, 200]
        },]
      }
    )
    // return this.http.get<string[]>(this.baseUrl);
  }
}
