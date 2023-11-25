import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entity } from '../models/entity.model';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  baseUrl = "http://localhost:3000/entities";

  constructor(private http: HttpClient) { }

  getAll():Observable<Entity[]>{
    return this.http.get<Entity[]>(this.baseUrl);
  }

  create(entity: Entity): Observable<Entity>{
    return this.http.post<Entity>(this.baseUrl, entity);
  }

  update(entity: Entity): Observable<Entity>{
    return this.http.put<Entity>(`${this.baseUrl}/${entity.id}`, entity);
  }

  delete(id: number): Observable<Entity> {
    return this.http.delete<Entity>(`${this.baseUrl}/${id}`);
  }

}
