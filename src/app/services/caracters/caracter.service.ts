import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CaracterService {
  constructor(private httpClient: HttpClient) {}
  getAllCaracters(): Observable<any> {
    return this.httpClient
      .get<any>('https://rickandmortyapi.com/api/character')
      .pipe(map(res => res.results || []));
  }
}
