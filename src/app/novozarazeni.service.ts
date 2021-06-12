import { Injectable } from "@angular/core";
import { Novozarazeni } from "./novozarazeni";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class NovozarazeniService {

    private novozarazeniUpisUrl = 'http://localhost:8080/novozarazeni';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ){}

    addNovozarazeni(novozarazeni: Novozarazeni): Observable<Novozarazeni>{
        return this.http.post<Novozarazeni>(this.novozarazeniUpisUrl, novozarazeni, this.httpOptions).pipe(
            tap((newNovozarazeni: Novozarazeni) => console.log(`dodan novozarazeni w/ IME=${newNovozarazeni.ime}`)),
            catchError(this.handleError<Novozarazeni>('addNovozarazeni'))
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