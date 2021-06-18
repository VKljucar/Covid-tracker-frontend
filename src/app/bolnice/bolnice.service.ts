import { Injectable } from "@angular/core";
import { Bolnice } from "./bolnice";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class BolniceService {

    private bolniceUrl = 'http://localhost:8080/bolnice';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ){}

    getBolnice(): Observable<Bolnice[]>{
        return this.http.get<Bolnice[]>(this.bolniceUrl)
        .pipe(
            tap(_ => console.log('dohvacene bolnice')),
            catchError(this.handleError<Bolnice[]>('getBolnice', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(operation);
          console.error(error);
          return of(result as T);
        };
      }

}