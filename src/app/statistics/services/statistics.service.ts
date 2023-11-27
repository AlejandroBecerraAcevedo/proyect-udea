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
    console.log(idAcademicUnit, idProgram);

    if(idAcademicUnit && idProgram){
      return this.http.get<Statistic>(`http://127.0.0.1:8000/statistics_program/${idAcademicUnit}/${idProgram}`);
    }else if(idAcademicUnit){
      return this.http.get<Statistic>(`http://127.0.0.1:8000/statistics/${idAcademicUnit}`);
    }else{
      return this.http.get<Statistic>("http://127.0.0.1:8000/statistics/");      
    }
    
  }
}
