import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://swapi.py4e.com/api/';

  constructor(private http: HttpClient) {}

  // Exemple GET
  getStarships(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/starships?format=json`);
  }
}
