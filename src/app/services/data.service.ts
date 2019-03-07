import { Poney } from './../interfaces/poney';
import { Injectable } from '@angular/core';
import { Race } from '../interfaces/race';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _ponies: Poney[] = []

  private _races: Race[] = []

  API_URL: string = "http://localhost:3000"

  get ponies(): Observable<Poney[]> {

    // if (this._ponies && this._ponies.length) {
    //   return of(this._ponies)
    // }

    return this.http.get<Poney[]>(`${this.API_URL}/ponies`)
      // .pipe(tap(ponies => this._ponies = ponies))
  }

  get races(): Observable<Race[]> {

    if (this._races && this._races.length) {
      return of(this._races)
    }

    return this.http.get(`${this.API_URL}/races`)
      .pipe(map(races => <Race[]>races))
      .pipe(tap(races => this._races = races))
  }

  getRaceById(id: string): Observable<Race> {
    return this.races.pipe(map(races => {
      return races.find(race => race.id === id)
    }))
  }

  saveRace(race: Race): Observable<Object> {
    return this.http.post(`${this.API_URL}/races`, race).pipe(tap(result => {
      this._races = []
    }))
  }

  savePoney(poney: Poney): Observable<Poney> {
    return this.http.post<Poney>(`${this.API_URL}/ponies`, poney).pipe(tap(result => {
      this._ponies = []
    }))
  }

  checkIfNameIsAvailable(name: string): Observable<boolean> {
    return this.ponies.pipe(map(ponies => {
      return !ponies.find(poney => poney.name.toLowerCase() === name.toLowerCase())
    }))
  }

  deletePoney(id: string): Observable<Object> {
    return this.http.delete(`${this.API_URL}/ponies/${id}`)
  }

  constructor(private http: HttpClient) { }
}
