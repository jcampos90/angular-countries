import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, catchError, map, of} from "rxjs";
import {ICountry} from "../interfaces/CountriesResponse";

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string   = "https://restcountries.com/v3.1";
  constructor(private http: HttpClient) {
  }

  searchByAlphaCode(code: string): Observable<ICountry|null> {
    return this.http.get<ICountry[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map(countries => countries.length > 0 ? countries.at(0)! : null),
        catchError(error => of(null))
      );
  }

  searchByCountries( term: string, type: 'capital'|'name'|'region' ): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${this.apiUrl}/${type}/${term}`)
      .pipe(
        catchError(error => { 
          return of([])
        })
      );
  }





}
