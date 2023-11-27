import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Municipality } from '../models/municipality.model';
import { SocialStratum } from '../models/social-stratum.model';
import { Program } from '../models/program.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getMunicipalities(): Observable<Municipality[]>{
    return this.http.get<Municipality[]>(`http://127.0.0.1:8000/municipios/`);
  }

  getSocialStratums(): Observable<SocialStratum[]>{
    return this.http.get<SocialStratum[]>(`${this.baseUrl}/socialEstratums`);
  }

  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(`http://127.0.0.1:8000/programs/`);
  }
 
}
