import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcademicUnit } from '../models/academic-unit.model';
import { Observable } from 'rxjs';
import { Program } from '../models/program.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAcademitUnits(): Observable<AcademicUnit[]> {
    return this.http.get<AcademicUnit[]>('http://127.0.0.1:8000/academicUnits/')
  }

  getPrograms(idAcademicUnit: number): Observable<Program[]> {
    return this.http.get<Program[]>(`http://127.0.0.1:8000/programs/${idAcademicUnit}`);
  }

}
