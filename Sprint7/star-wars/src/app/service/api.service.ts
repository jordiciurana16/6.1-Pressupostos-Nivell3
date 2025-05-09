import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://swapi.py4e.com/api/';
  id: number | undefined = undefined;

  constructor(private http: HttpClient) {}

  getStarships(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/starships?format=json`);
  }

  getStarshipId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/starships/${id}/?format=json`);
  }
}
