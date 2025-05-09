import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://swapi.py4e.com/api/';
  id: number | undefined = undefined;
  nextPageUrl: string | undefined = undefined;
  noMorePages: boolean = false; // Variable per controlar si hi ha més pàgines

  constructor(private http: HttpClient) {}

  getStarships(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/starships?format=json`).pipe(
      tap((data) => {
        this.nextPageUrl = data.next; // Assigna nextPageUrl
      })
    );
  }

  getStarshipId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/starships/${id}/?format=json`);
  }

  getNextStarships(): Observable<any> {
    if (!this.nextPageUrl) {
      this.noMorePages = true;
    }
    return this.http.get<any>(`${this.nextPageUrl}`);
  }
}
